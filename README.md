# URL Shortener

This project is a URL shortener service built with Node.js. It takes in a valid URL and returns a shortened URL, redirecting the user to the previously provided URL. It also keeps track of the total visits/clicks on the shortened URL.

## Features

- Generate a shortened URL for a given valid URL.
- Redirect to the original URL when accessing the shortened URL.
- Track and return the total number of clicks on each shortened URL.

## Routes

- **POST /URL**  
  Generates a new short URL and returns the shortened URL in the format `example.com/random-id`.
  
- **GET /:id**  
  Redirects the user to the original URL.
  
- **GET /URL/analytics/:id**  
  Returns the total number of clicks for the provided short ID.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/url-shortener.git
    ```
2. Navigate to the project directory:
    ```sh
    cd url-shortener
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Project

1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running on `http://localhost:3000`.

### Usage

- **Generating a Short URL:**
  Send a POST request to `/URL` with a JSON body containing the original URL:
  ```json
  {
    "url": "https://example.com"
  }
