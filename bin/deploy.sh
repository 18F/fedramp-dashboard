set -e

API="https://fr.api.cloud.gov"
ORG="gsa-fedrampdashboard"
SPACE=$1

if [ $# -ne 1 ]; then
echo "Usage: deploy <space>"
exit
fi

if [ $SPACE = 'prod' ]; then
NAME="fedramp-dashboard"
MANIFEST="manifest.yml"
# elif [ $SPACE = 'staging' ]; then
#   NAME="fedramp-staging"
#   MANIFEST="manifest-staging.yml"
else
echo "Unknown space: $SPACE"
exit
fi

cf login --a $API --u $CF_USERNAME --p $CF_PASSWORD --o $ORG -s $SPACE
cf zero-downtime-push $NAME -f $MANIFEST
