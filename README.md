[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://github.com/ArmanKhanTech/Portfolio/">
    <img src="https://github.com/ArmanKhanTech/Portfolio/assets/92728787/1c773079-463f-4cd9-a9b7-a265820cbbc2" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Portfolio</h3>

  <p align="center">
    My 3D personal portfolio website.
    <br />
    <a href="https://github.com/ArmanKhanTech/Portfolio"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://armankhan.tech">Visit</a>
    ·
    <a href="https://github.com/ArmanKhanTech/Portfolio/issues">Report a Bug</a>
    ·
    <a href="https://github.com/ArmanKhanTech/Portfolio/issues">Request new Feature</a>
  </p>
</div>



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the Project</a>
      <ul>
        <li><a href="#built-with">Built with</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Setup</a></li>
        <li><a href="#customization">Customization</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#contact">Acknowledgements</a></li>
  </ol>
</details>



## About The Project

A 3D personal portfolio website is an immersive and interactive online exhibition of your skills and accomplishments. It goes beyond the static text and images of traditional portfolios by utilizing the power of 3D graphics and animation to wow viewers and leave a lasting impression.


### Built With

<ul>
  <li>
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  </li>
  <li>
    <img src="https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white" />
  </li>
  <li>
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  </li>
</ul>



## Getting Started

Follow the below instructions to get started.


### Prerequisites

<ol>
  <li>
    <p>NPM</a>
  </li>
  <li>
    <p>Email.js Account</a>
  </li>
</ol>



### Setup

1. Clone this repo
  
   ```sh
   git clone https://github.com/ArmanKhanTech/Portfolio.git
    ```
   
2. Install NPM packages
   
    ```sh
    npm install
    ```
    
3. Create a `.env` file in the root directory
   
    ```sh
    touch .env
    ```
    
4. Add the following variables in `.env` file
   
    ```sh
    VITE_APP_EMAILJS_SERVICE_ID=service_id_emailjs
    VITE_APP_EMAILJS_TEMPLATE_ID=template_id_emailjs
    VITE_APP_EMAILJS_PUBLIC_KEY=public_key_emailjs
    ```
    
5. Run the app
    
    ```sh
    npm run dev
    ```
  
6. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.


### Customization
1. Change the initials (icon) in `src/components/Navbar.js` to your initials (line 79 & 88)
    ```HTML
    <header className='header'>
        <button 
          className='text-3xl orange-gradient-text font-bold font-sans rounded-xl border px-2 py-2.5'
          onClick={toggleMenu}>
          Your Initials
        </button>
    </header>
    ```
    and 
    ```HTML
    <NavLink to='/'>
      <button className='text-3xl orange-gradient-text font-bold font-sans rounded-xl border px-2 py-2.5'>
        Your Initials
      </button>
    </NavLink>
    ```

2. Change the name in `src/components/HomeInfo.js` to your name (line 35 & 90)
    ```HTML
    <div className='text-4xl font-bold orange-gradient-text'>
      <h1>Hello,</h1>
      <h1>I am {Your Name} & I do</h1>
    </div>
    ```
    and 
    ```HTML
    <div className='text-6xl font-bold orange-gradient-text'>
      <h1>Hello,</h1>
      <h1>I am {Your Name} & I do</h1>
    </div>
    ```

3. Change the skills, projects, education & services in `src\constanst\index.js` according to your requirements
   \
    a. Assets (icons or images) can be added in `src\assets\` folder
   \
    b. Update the `index.js` of respective folders in `src\assets\` whenever making any changes in it
   \
    c. Also, change the `favicon.ico` in `src\assets\` folder accrodingly
   \
    d. Add expriences & testimonals sections in `About.jsx` if you want
   \
    e. Kindly make sure to modify all the respective import statements whenever making in changes in `src\constanst\index.js`

5. Also, update the title & description in `index.html`

6. Change the link to your resume in `src\components\HomeInfo.js` (line 64  & 121)
    ```HTML
    <div className='my-3'>
      <a href='resume_link' target='_blank' rel='noreferrer'>
        <button className='px-3 py-1.5 font-semibold text-xl text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-orange-400 to-red-600 rounded-md hover:scale-110'>
          Resume
        </button>
      </a>
    </div>
    ```
    and
    ```HTML
    <div className='mt-5'>
      <a href='resume_link' target='_blank' rel='noreferrer'>
        <button className='px-3 py-1.5 font-semibold text-2xl text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-orange-400 to-red-600 rounded-md hover:scale-110'>
          Resume
        </button>
      </a>
    </div>
    ```



## Roadmap

- [x] Home Page
- [x] Welome Page
- [x] About Page
- [x] Service Page
- [x] Contact Page
- [x] Project Page

See the [open issues](https://github.com/ArmanKhanTech/Portfolio/issues) for a full list of proposed features (and known issues)



## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! 

Thanks again!



## License

Distributed under the MIT License. See `LICENSE.txt` for more information.



## Contact

Arman Khan - ak2341776@gmail.com

Project Link - [https://github.com/ArmanKhanTech/Portfolio](https://github.com/ArmanKhanTech/Portfolio)


## Acknowledgements

<ul>
  <li>
    <a href="https://www.youtube.com/c/JavaScriptMastery">
      JS Mystery
    </a>
  </li>
  <li>
    <a href="https://sketchfab.com/3d-models/alien-terrain-05-hdri-7ba0da88576d4f4592beaaa0e9e3ff2d">
      3D Model (Home Page)
    </a>
  </li>
</ul>




[contributors-shield]: https://img.shields.io/github/contributors/ArmanKhanTech/Portfolio.svg?style=for-the-badge
[contributors-url]: https://github.com/ArmanKhanTech/Portfolio/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ArmanKhanTech/Portfolio.svg?style=for-the-badge
[forks-url]: https://github.com/ArmanKhanTech/Portfolio/network/members
[stars-shield]: https://img.shields.io/github/stars/ArmanKhanTech/Portfolio.svg?style=for-the-badge
[stars-url]: https://github.com/ArmanKhanTech/Portfolio/stargazers
[issues-shield]: https://img.shields.io/github/issues/ArmanKhanTech/Portfolio.svg?style=for-the-badge
[issues-url]: https://github.com/ArmanKhanTech/Portfolio/issues
[license-shield]: https://img.shields.io/github/license/ArmanKhanTech/Portfolio.svg?style=for-the-badge
[license-url]: https://github.com/ArmanKhanTech/Portfolio/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/arman-khan-25b624205/
