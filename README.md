
# Blazor Server AI Chatbot Development Series

This repository is part of a series that guides you through building a custom AI chatbot using Blazor Server, Docker, Webpack, and TailwindCSS. 


## Repository Contents

### Project Setup

- **Blazor Server Application**: The foundational code for a Blazor Server application.
- **Docker Integration**: Dockerfile and Docker Compose setup for containerizing the application.
- **Webpack and TailwindCSS**: Configuration files for integrating Webpack and TailwindCSS for a modern, responsive frontend.

### Key Files and Directories

- **/src**: Contains the source code for the Blazor Server application.
  - **/Pages**: Razor pages for the Blazor app.
  - **/Shared**: Shared components and layout files.
  - **App.razor**: The root component of the Blazor application.
  - **Program.cs**: The entry point for the Blazor application.
  - **Startup.cs**: Configuration and services setup for the Blazor app.

- **/Docker**: Docker configuration files.
  - **Dockerfile**: Instructions to build the Docker image.
  - **docker-compose.yml**: Docker Compose file to manage multi-container Docker applications.

- **/webpack**: Webpack configuration files.
  - **webpack.config.js**: Configuration for Webpack.
  - **tailwind.config.js**: Configuration for TailwindCSS.

- **.gitignore**: Specifies files and directories to be ignored by Git.
- **README.md**: This file, providing an overview and instructions for the repository.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **.NET 8.0**: [Download and Install .NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- **Node.js**: [Download and Install Node.js](https://nodejs.org/en/download/)
- **Docker**: [Install Docker](https://www.docker.com/get-started)

### Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/your-username/Blazor-Server-Vehicle-Inventory-Ai.git
   cd Blazor-Server-Vehicle-Inventory-Ai
   ```

2. **Restore NuGet Packages**:
   ```sh
   dotnet restore
   ```

3. **Install Node.js Dependencies**:
   ```sh
   npm install
   ```

4. **Build and Run the Application**:
   ```sh
   docker-compose up --build
   ```

### Usage

After running the application, navigate to `https://localhost:5001` in your web browser to see the Blazor Server application in action.

## Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This repository is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Stay Connected

- **Subscribe**: [YouTube Channel](https://www.youtube.com/@JCBCB)
- **Like and Share**: If you find this series helpful, please give it a thumbs up and share it with others.
- **Comment**: Have any questions or feedback? Drop a comment below the video.

By following the steps above, you'll be able to set up and run the Blazor Server application as demonstrated in the video series. Stay tuned for more videos and updates in this series!
