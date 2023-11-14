/**asyncHandler is a middleware function that is useful for handling errors
 * in asynchronous Express route handlers. */

function asynchronousHandler(fn){
    return(
        (req, res, next) => {
            Promise.resolve(fn(req, res, next))
            .catch(next);
        }
    )
}