const getUsers = async () => {
    try {
        console.log("getUsers");
        return ({ data: "ok" });
    } catch (error) {
        console.log(error);
    }
}

module.exports.getUsers = getUsers;