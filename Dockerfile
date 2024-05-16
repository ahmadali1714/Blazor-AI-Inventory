# Use the official Microsoft .NET SDK image which includes the necessary .NET SDKs
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env

WORKDIR /app

# Install Node.js
RUN apt-get update && \
    apt-get install -y wget && \
    wget -qO- https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Copy csproj and restore as distinct layers
COPY InventoryAiApp/*.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY InventoryAiApp/ ./

# Install npm dependencies and run the build script for TailwindCSS via Webpack
RUN npm install
RUN npm run build-css

#! Change From Release To Debug
RUN dotnet publish -c Debug -o out

# Final stage/image
# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0

WORKDIR /app
COPY --from=build-env /app/out .

ENTRYPOINT [ "dotnet", "InventoryAiApp.dll" ]