if (process.env.NODE_ENV === "production") console.log = function () {};
if (process.env.NODE_ENV === "production") console.error = function () {};