const getVotes = async () => {
    try {
        console.log("getVotes");
        return ({ data: "ok" });
    } catch (error) {
        console.log(error);
    }
}

module.exports.getVotes = getVotes;