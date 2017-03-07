set -e

API="https://api.fr.cloud.gov"
ORG="gsa-fedrampdashboard"
SPACE=$1

if [ $# -ne 1 ]; then
echo "Usage: deploy <space>"
exit
fi

if [ $SPACE = 'prod' ]; then
  NAME="fedramp-dashboard"
  MANIFEST="manifest.yml"
  CF_USERNAME=$CF_USERNAME_PROD
  CF_PASSWORD=$CF_PASSWORD_PROD
elif [ $SPACE = 'develop' ]; then
  NAME="fedramp-develop"
  MANIFEST="manifest-staging.yml"
  CF_USERNAME=$CF_USERNAME_DEV
  CF_PASSWORD=$CF_PASSWORD_DEV
else
echo "Unknown space: $SPACE"
exit
fi

cf login --a $API --u $CF_USERNAME --p $CF_PASSWORD --o $ORG -s $SPACE
cf zero-downtime-push $NAME -f $MANIFEST
