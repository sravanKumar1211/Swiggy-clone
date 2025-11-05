import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#02060C] text-gray-400 px-10 py-12 mt-10">
      {/* Top Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <svg
              viewBox="0 0 61 61"
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#a)">
                <path
                  fill="#FF5200"
                  d="M.32 30.5c0-12.966 0-19.446 3.498-23.868a16.086 16.086 0 0 1 2.634-2.634C10.868.5 17.354.5 30.32.5s19.446 0 23.868 3.498c.978.774 1.86 1.656 2.634 2.634C60.32 11.048 60.32 17.534 60.32 30.5s0 19.446-3.498 23.868a16.086 16.086 0 0 1-2.634 2.634C49.772 60.5 43.286 60.5 30.32 60.5s-19.446 0-23.868-3.498a16.086 16.086 0 0 1-2.634-2.634C.32 49.952.32 43.466.32 30.5Z"
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M32.317 24.065v-6.216a.735.735 0 0 0-.732-.732.735.735 0 0 0-.732.732v7.302c0 .414.336.744.744.744h.714c10.374 0 11.454.54 10.806 2.73-.03.108-.066.21-.102.324-.006.024-.012.048-.018.066-2.724 8.214-10.092 18.492-12.27 21.432a.764.764 0 0 1-1.23 0c-1.314-1.776-4.53-6.24-7.464-11.304-.198-.462-.294-1.542 2.964-1.542h3.984c.222 0 .402.18.402.402v3.216c0 .384.282.738.666.768a.73.73 0 0 0 .582-.216.701.701 0 0 0 .216-.516v-4.362a.76.76 0 0 0-.756-.756h-8.052c-1.404 0-2.256-1.2-2.814-2.292-1.752-3.672-3.006-7.296-3.006-10.152 0-7.314 5.832-13.896 13.884-13.896 7.17 0 12.6 5.214 13.704 11.52.006.054.048.294.054.342.288 3.096-7.788 2.742-11.184 2.76a.357.357 0 0 1-.36-.36v.006Z"
                  clipRule="evenodd"
                ></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.32.5h60v60h-60z"></path>
                </clipPath>
              </defs>
            </svg>
            <h1 className="text-white font-semibold text-xl">Swiggy</h1>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 Swiggy Limited. <br /> Made with ❤️ in India.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-white font-semibold mb-3">Company</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Team</li>
            <li className="hover:text-white cursor-pointer">Swiggy One</li>
            <li className="hover:text-white cursor-pointer">Swiggy Instamart</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-white font-semibold mb-3">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help & Support</li>
            <li className="hover:text-white cursor-pointer">Partner With Us</li>
            <li className="hover:text-white cursor-pointer">Ride With Us</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h2 className="text-white font-semibold mb-3">Legal</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            <li className="hover:text-white cursor-pointer">Investor Relations</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm">
        <p className="text-gray-500 mb-4 sm:mb-0">For better experience, download the Swiggy app now</p>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.27 4.27 0 0 0 16.11 4c-2.38 0-4.3 1.93-4.3 4.31 0 .34.04.67.11.99A12.13 12.13 0 0 1 3.15 5.1a4.3 4.3 0 0 0-.58 2.17 4.3 4.3 0 0 0 1.91 3.58 4.3 4.3 0 0 1-1.95-.54v.05a4.3 4.3 0 0 0 3.45 4.22 4.3 4.3 0 0 1-1.94.07 4.3 4.3 0 0 0 4.02 2.99A8.59 8.59 0 0 1 2 19.54 12.12 12.12 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0 0 22.46 6z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.42.41.58.22.995.48 1.43.91.434.434.69.85.91 1.43.17.45.354 1.25.41 2.42.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.42a3.42 3.42 0 0 1-.91 1.43 3.42 3.42 0 0 1-1.43.91c-.45.17-1.25.354-2.42.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.42-.41a3.42 3.42 0 0 1-1.43-.91 3.42 3.42 0 0 1-.91-1.43c-.17-.45-.354-1.25-.41-2.42C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.42a3.42 3.42 0 0 1 .91-1.43 3.42 3.42 0 0 1 1.43-.91c.45-.17 1.25-.354 2.42-.41C8.416 2.172 8.8 2.16 12 2.16m0-2.16C8.736 0 8.332.013 7.052.07 5.775.127 4.815.327 4.07.63a5.52 5.52 0 0 0-2.01 1.31A5.52 5.52 0 0 0 .75 3.95c-.303.745-.503 1.705-.56 2.982C.133 8.213.12 8.616.12 12s.013 3.787.07 5.067c.057 1.277.257 2.237.56 2.982a5.52 5.52 0 0 0 1.31 2.01 5.52 5.52 0 0 0 2.01 1.31c.745.303 1.705.503 2.982.56C8.213 23.867 8.616 23.88 12 23.88s3.787-.013 5.067-.07c1.277-.057 2.237-.257 2.982-.56a5.52 5.52 0 0 0 2.01-1.31 5.52 5.52 0 0 0 1.31-2.01c.303-.745.503-1.705.56-2.982.057-1.28.07-1.684.07-5.067s-.013-3.787-.07-5.067c-.057-1.277-.257-2.237-.56-2.982a5.52 5.52 0 0 0-1.31-2.01A5.52 5.52 0 0 0 20.05.63c-.745-.303-1.705-.503-2.982-.56C15.787.013 15.384 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zM18.406 4.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
