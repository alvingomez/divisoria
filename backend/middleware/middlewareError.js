//This component is for "Page Not Found" 

const notFound = () => {
    // Create a new Error object
    const error = new Error(`Page Not Found, ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (error, req, res, next) => {
    // CHECK FOR ERRORS
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = error.message;

    // CHECK FOR MONGOOSE BAD OBJECTID
    if(error.name = 'CastError' && error.kind === 'ObjectId'){
        message = `Resource Not Found`
    }

    res.status(statusCode).json(
        {
            message,
            stack:process.env.NODE_ENV === 'production' ? '🔥' : error.stack
        }
    );
};

export {notFound, errorHandler};
