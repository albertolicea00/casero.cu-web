#!/usr/bin/env bash
# Fetches the leaf TLS certificate served by casero.rem.cu and saves it as DER
# (.cer), the format the iOS client pins against in CertificatePinner.swift.
#
# The portal is only reachable from inside Cuba — run this from a machine/
# network that can actually reach the host. The server uses a self-signed
# chain (issuer: CSIC P-Services CA) that fails standard validation; that is
# expected, not a bug — this script disables verification on purpose to
# capture the certificate as presented.
set -euo pipefail

HOST="casero.rem.cu"
PORT="443"
OUT="${1:-casero_rem_cu.cer}"

if ! command -v openssl >/dev/null 2>&1; then
  echo "error: openssl not found in PATH" >&2
  exit 1
fi

pem="$(openssl s_client -connect "${HOST}:${PORT}" -servername "${HOST}" </dev/null 2>/dev/null)"

if [ -z "${pem}" ]; then
  echo "error: no response from ${HOST}:${PORT} — unreachable from this network? (portal is Cuba-only)" >&2
  exit 1
fi

echo "${pem}" | openssl x509 -outform DER -out "${OUT}"

echo "saved: ${OUT}"
openssl x509 -inform DER -in "${OUT}" -noout -subject -issuer -dates
