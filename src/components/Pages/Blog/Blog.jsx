import React from "react";
import useTitle from "../../Hooks/titleHooks";

const Blog = () => {
  useTitle('Blog')
  return (
    <div className=" my-container">
      <h1 className="text-center font-bold text-3xl mb-4 text-red-300 font-serif  ">Blogs:</h1>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box "
      >
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p className="text-gray-500">
            An access token is a short-lived credential used to access protected
            resources, while a refresh token is a long-lived credential used to
            obtain a new access token. The access token is sent with each
            request to prove the user's identity, while the refresh token is
            used to request a new access token when the current one expires. On
            the client-side, access and refresh tokens should be securely
            stored, typically in memory or in a secure storage mechanism
            provided by the operating system or framework used for development.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p className="text-gray-500">
            <span className="text-black">SQL: </span>
            <br />
            - Relational data model with structured tables.
            <br />
            - Standardized query language (SQL) for data manipulation.
            <br />
            - Strong data consistency and integrity.
            <br />
            - Suitable for complex querying and transactions.
            <br />
            - Traditional choice for relational applications and financial
            systems.
            <br />
            <span className="text-black">NoSQL:</span>
            <br />
            - Flexible data models (document, key-value, wide-column, graph).
            <br />
            - Varied query languages or APIs.
            <br />
            - Designed for scalability and horizontal data distribution.
            <br />
            - Agile and adaptable to changing data requirements.
            <br />
            - Commonly used for unstructured or semi-structured data, real-time{" "}
            <br />
            processing, and scalable applications.
            <br />
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p className="text-gray-500">
            <span className="text-black">
              Express.js:
              <br />
            </span>
            - Express.js is a lightweight and flexible web application framework
            for Node.js.
            <br />
            - It provides a minimalistic approach to building web applications
            and APIs.
            <br />
            - It offers a simple and intuitive API for handling HTTP requests,
            routing, and middleware.
            <br />
            - Express.js is highly extensible and allows developers to add
            additional functionality through middleware and third-party
            libraries.
            <br />
            - It is widely used for creating scalable and efficient server-side
            applications and APIs.
            <br />
            <span className="text-black">Nest.js:</span>
            <br />
            - Nest.js is a progressive and opinionated web application framework
            for Node.js, built with TypeScript.
            <br />
            - It combines elements of object-oriented programming, functional
            programming, and metaprogramming.
            <br />
            - Nest.js follows a modular and organized architectural pattern,
            making it easy to build scalable and maintainable applications.
            <br />
            - It provides built-in support for dependency injection, routing,
            middleware, and various other features.
            <br />
            - Nest.js is suitable for developing enterprise-grade applications,
            microservices, and serverless functions.
            <br />
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p className="text-gray-500">
            MongoDB's aggregate is a powerful framework for performing advanced
            data processing and analysis operations on collections of documents.
            It uses a pipeline of stages to transform and compute data, allowing
            for grouping, filtering, sorting, aggregating, and more. With a rich
            set of operators and expressions, it provides flexibility to shape
            the output and optimize performance. It enables advanced analytics
            and insights from MongoDB data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
