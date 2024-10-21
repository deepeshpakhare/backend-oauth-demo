const createSuccessResposeData = (dataPayload) => {
    return {
        "meta":{
            "code":0,
            "message": "ok"
        },
        "data": {
            ...dataPayload
        }
    }
}

module.exports = {
    "createSuccessResposeData" : createSuccessResposeData
}