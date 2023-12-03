# Fragmentarium

## Overview

This project aims to build a scalable microservices-based system that provides an HTTP REST API for existing apps, servers, and devices. The system enables the creation, retrieval, update, and deletion (CRUD) of small fragments of text and images. Additionally, it supports the conversion of fragment data between different formats without increasing storage costs. All fragment data is stored along with relevant information such as size, type, and creation/modification dates. Proper authorization ensures data isolation between different users in the system, and the architecture is designed for scalability.

## Features

1. **RESTful API:**
   - Provides HTTP REST API for seamless integration with existing apps, servers, and devices.

2. **CRUD Operations:**
   - Enables the creation, retrieval, update, and deletion of small fragments of text and images.

3. **Format Conversion:**
   - Supports conversion of fragment data between different formats (e.g., Markdown to HTML) without increasing storage costs.

4. **Metadata Management:**
   - Stores fragment data along with metadata, including size, type, and creation/modification dates.

5. **Authorization:**
   - Implements proper authorization to ensure data isolation between different users.

6. **Scalability:**
   - Built to scale, allowing the system to store massive amounts of data.

7. **GitHub and CI/CD:**
   - Developed on GitHub with an automated build, test, and deployment pipeline to AWS.

## Architecture

The system is designed using a microservices architecture, with key components including:

- **API Gateway:** Manages HTTP requests, handles authentication, and routes requests to the appropriate microservice.
  
- **User Service:** Manages user data and authentication, ensuring secure access to the system.
  
- **Fragment Service:** Handles CRUD operations for text and images, and manages storage, retrieval, and format conversions.

- **Conversion Service:** Responsible for efficient format conversions without increasing storage costs.

- **Database (DynamoDB):** Stores fragment data, including metadata, in a scalable and low-latency manner.

## Contributing

We welcome contributions! If you would like to contribute to the project, please check out our [Contribution Guidelines](link-to-contribution-guidelines).

## License

This project is licensed under the [LICENSE NAME](link-to-license-file).
