const getOptions = async () => {
    try {
        console.log("getOptions");
        return ({ data: "ok" });
    } catch (error) {
        console.log(error);
    }
}

module.exports.getOptions = getOptions;