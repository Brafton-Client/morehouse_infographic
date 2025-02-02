var deployment_group = {
    "applicationName": "designs-dev-site",
        "deploymentConfigName": "CodeDeployDefault.OneAtATime",
        "ec2TagFilters": [
            {
                "Type": "KEY_AND_VALUE",
                "Value": "designs-dev-site",
                "Key": "app"
            }
        ],
        "deploymentStyle": {
            "deploymentType": "IN_PLACE",
            "deploymentOption": "WITHOUT_TRAFFIC_CONTROL"
        },
        "serviceRoleArn": "arn:aws:iam::868722408828:role/designs-dev-pipeline-role",
        "deploymentGroupName": "designs-dev-site",
};   
module.exports = deployment_group;