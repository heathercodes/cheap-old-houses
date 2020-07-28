export CLOUDSDK_CORE_DISABLE_PROMPTS=1
echo $GCP_SERVICE_ACCOUNT > $HOME/gcloud-service-account.json

# Authenticate with service account creds
gcloud auth activate-service-account \
	cheap-old-houses-ci-cd@${GOOGLE_PROJECT}.iam.gserviceaccount.com \
	--key-file=$HOME/gcloud-service-account.json \
	--project=${GOOGLE_PROJECT}
gcloud config set project ${GOOGLE_PROJECT}
rm -Rf ~/.docker
docker login -u _json_key --password-stdin https://gcr.io < $HOME/gcloud-service-account.json
