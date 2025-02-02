var pipeline = {
    "pipeline": {
        "roleArn": "arn:aws:iam::868722408828:role/designs-dev-pipeline-role", 
        "stages": [
            {
                "name": "Source", 
                "actions": [
                    {
                        "inputArtifacts": [], 
                        "name": "Source", 
                        "actionTypeId": {
                            "category": "Source", 
                            "owner": "AWS", 
                            "version": "1", 
                            "provider": "S3"
                        }, 
                        "outputArtifacts": [
                            {
                                "name": "source"
                            }
                        ], 
                        "configuration": {
                            "S3Bucket": "designs-dev-pipeline-artifacts", 
                            "S3ObjectKey": "sites/Brafton-Client/{client}/project.zip"
                        }, 
                        "runOrder": 1
                    }
                ]
            }, 
            {
                "name": "Deploy", 
                "actions": [
                    {
                        "inputArtifacts": [
                            {
                                "name": "source"
                            }
                        ], 
                        "name": "DeployEC2", 
                        "actionTypeId": {
                            "category": "Deploy", 
                            "owner": "AWS", 
                            "version": "1", 
                            "provider": "CodeDeploy"
                        }, 
                        "outputArtifacts": [], 
                        "configuration": {
                            "ApplicationName": "designs-dev-site", 
                            "DeploymentGroupName": "designs-dev-site"
                        }, 
                        "runOrder": 1
                    }
                ]
            }
        ], 
        "artifactStore": {
            "type": "S3", 
            "location": "designs-dev-pipeline-artifacts"
        }, 
        "name": "{clientName}}-designs-dev-pipeline", 
        "version": 1
    }
}
module.exports = pipeline;