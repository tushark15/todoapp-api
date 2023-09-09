import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TodoApp API",
      version: "1.0.0",
      description: "API for managing Todos",
    },
  },

  apis: ["./src/routes/todoRoutes.ts"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
