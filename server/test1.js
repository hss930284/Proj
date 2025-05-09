import fetch from 'node-fetch';
const workitem_data = {
  "data": [
      {
          "type": "workitems",
          "attributes": {
              "description": {
                  "type": "text/html",
                  "value": "RestAPI work item creation"
              },
              "dueDate": "2024-12-31",
              "hyperlinks": [
                  {
                      "role": "ref_ext",
                      "uri": "https://polarion.plm.automation.siemens.com"
                  }
              ],
              "initialEstimate": "5 1/2d",
              "priority": "90.0",
              "remainingEstimate": "5 1/2d",
              "resolution": "done",
              "resolvedOn": "1970-01-01T00:00:00Z",
              "severity": "blocker",
              "status": "open",
              "timeSpent": "5 1/2d",
              "title": "RestAPI Workitem",
              "type": "systemrequirement"
          },
          "relationships": {
              "assignee": {
                  "data": [
                      {
                          "type": "users",
                          "id": "api_test"
                      }
                  ]
              },
              "author": {
                  "data": {
                      "type": "users",
                      "id": "user1"
                  }
              },
              "categories": {
                  "data": [
                      {
                          "type": "categories",
                          "id": "MyProjectId/MyCategoryId"
                      }
                  ]
              },
              "linkedRevisions": {
                  "data": [
                      {
                          "type": "revisions",
                          "id": "default/1234"
                      }
                  ]
              },
              "module": {
                  "data": {
                      "type": "documents",
                      "id": "api_test/_default/System Requirement Specification"
                  }
              }
          }
      }
  ]
};

const createWorkItem = async () => {
  try {
    const url = "https://inhnjwks-985654.tatatechnologies.com/polarion/rest/v1/projects/api_test/workitems";
    const token = "eyJraWQiOiI0Yjk2ODYwMy1hYzFjOTIzMy00ZDZhMzJkNC02MWRmZjhjNSIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJ1c2VyMyIsImlkIjoiY2VjMjM4YWMtYWMxYzkyMzMtMzE5ZTQ3MTUtZGExNjljZWUiLCJleHAiOjE3MzU1ODM0MDAsImlhdCI6MTczNDM0MDY1NX0.eoTwLtwQ8-ApeeZz0mo0RhYnF_E24-CgjTEZapD60iNuAWnnmNXKEL294rLH1nbPoh1F0l1TW6xpq7T6bx_DXs_yGw_2nihn3jKqpRrCcFlGeUH1dcU5w5DpB-SCbqtGGd8RuZMfiOrWEOTIAM7YliO6fJXnlu4sNDueSuIqgQfeYiV_BEmGQBrJ5VTODpWYhCEEXbcxv5bU_h18Uivgt14y8QWxe0TeISDaIP51H1tZn0bqb-hZk2drGN-3_ZopZHyNs3I2EH9i0v5Kk5EYv1pObfRBQyi9m4Zf_MYAQrajJUOe1Abv9zGQqBvspIxmbgwEOleAIWoaEVFL7WcPcg";

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      },
      body: JSON.stringify(workitem_data) 
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Work item created successfully.");
      console.log(data);
    } else {
      console.log("Request Failed")
    }
  } catch (e) {
    console.log("Unable to fetch work item");
  }
}

createWorkItem();