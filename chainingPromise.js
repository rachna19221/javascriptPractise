const checkPackage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Package checked");
        }, 2000);
    });
};

const decideAction = (status) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(status + " -> Action decided");
        }, 2000);
    });
};

checkPackage()
    .then(decideAction)
    .then((result) => {
        console.log(result); // Output: Package checked -> Action decided
    })
    .catch((error) => {
        console.log(error); // Handle any errors
    });