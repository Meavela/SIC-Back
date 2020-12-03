const getQuestions = async () => {
    try {
        console.log("getQuestions");
        return ({ data: "ok" });
    } catch (error) {
        console.log(error);
    }
}

module.exports.getQuestions = getQuestions;