curl --request PATCH \
--header "Authorization: Bearer "$(gcloud auth print-access-token) \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--data '{"type":"FIRESTORE_NATIVE"}' \
"https://firestore.googleapis.com/v1/projects/PROJECT_ID/databases/(default)?updateMask=type"
