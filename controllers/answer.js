exports.getAnswer = async (req, res, next) => {
    let question = req.body.question
    let answerType = req.body.answerType
    console.log(question)

    let inputId = ""
    let buttonId = ""
    let text = ""
    if(answerType == "person"){
        inputId = "personInput";
        buttonId = "addPersonButton"
        text = "osobu"
    }

    if(answerType == "place"){
        inputId = "placeInput";
        buttonId = "addPlaceButton"
        text = "mjesto"
    }

    if(answerType == "event"){
        inputId = "eventId";
        buttonId = "addEventButton";
        text = "događaj"
    }
    res.render('answer', {question, answerType, inputId, buttonId, text})
}