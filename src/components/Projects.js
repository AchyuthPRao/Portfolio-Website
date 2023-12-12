import React from 'react'

const posts = [
    {
      id: 1,
      title: "Bitez",
      href: "https://github.com/AchyuthPRao/Bitez",
      description:
        "A fully functional Food-ordering website built from scratch using MERN stack, with a robust database built using Mongoose and MongoDB,An interactive and quick Frontend UI built using ReactJs,Redux and The backend is handled by NodeJs and Express",
      date: "November, 2023",
      category: { title: "MERN stack", href: "#" },
      owner: {
        name: "Achyuth P Rao",
        imageUrl:'https://private-user-images.githubusercontent.com/108856697/280080306-0fc1b34d-b301-40a9-ae90-5a48c9b20252.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIyODAzNTMsIm5iZiI6MTcwMjI4MDA1MywicGF0aCI6Ii8xMDg4NTY2OTcvMjgwMDgwMzA2LTBmYzFiMzRkLWIzMDEtNDBhOS1hZTkwLTVhNDhjOWIyMDI1Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIxMVQwNzM0MTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04OGFkNTU4M2I5MWNiYjA0NTgyMzZmOWQ0MmI4ODk5YWEzYTJjNmI5ZTAyMzVmMjY2ZmU4Mzk4YmRlNWNmYjIzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.K0ts_CAvmYn555B4LmMctzyLnDzpzkJ9myKCqKZTPhA',
      },
      
    },
    {
      id: 2,
      title: "SmartSpend",
      href: "https://github.com/AchyuthPRao/SmartSpend" ,
      description:
        "One stop solution for your Untracked Expenses! A full fledged expense tracker with User Authentication,P2P lending(Chat Room), Interactive Ui, Annual Financial Analysis and much more!",
      date: "November, 2023",
      category: { title: "MERN stack", href: "#" },
      owner: {
        name:'Achyuth',
        imageUrl:'https://private-user-images.githubusercontent.com/108856697/289457797-bf6b531b-0a4c-4126-bc31-d15289de74db.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIyODA5NDUsIm5iZiI6MTcwMjI4MDY0NSwicGF0aCI6Ii8xMDg4NTY2OTcvMjg5NDU3Nzk3LWJmNmI1MzFiLTBhNGMtNDEyNi1iYzMxLWQxNTI4OWRlNzRkYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIxMVQwNzQ0MDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MmQxMzIzZGI2NTQ1NzAyYWRlZjU1NTQ1MzY4MDM4NzY0Yjk5OTljMjAwMDgzNDhjOGJhOTBjNDAzZWQ0MWMxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.gCXe6AMdwn8nNEzeATZclQ4bF3SGn4BjnsoTVrbBMCw',
      },
      
    },
    {
      id: 3,
      title: "Catalysis2.0",
      href: "https://isecatalysis.in/" ,
      description:
        "Catalysis is an inter-department, extravagant 3-day tech fest, hosted by the ISE Department of Dayananda Sagar College of Engineering (DSCE), Bangalore. Catalysis aims to bring out the technical aspects in students by incorporating tech in various events going to be held throughout the whole of the fest",
      date: "December, 2023",
      category: { title: "MERN stack", href: "#" },
      owner: {
        name:'Achyuth',
        imageUrl:'https://private-user-images.githubusercontent.com/108856697/289481887-cc9d2d4c-ecb8-4600-aca3-3643c66b071f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIyODYwMTgsIm5iZiI6MTcwMjI4NTcxOCwicGF0aCI6Ii8xMDg4NTY2OTcvMjg5NDgxODg3LWNjOWQyZDRjLWVjYjgtNDYwMC1hY2EzLTM2NDNjNjZiMDcxZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIxMVQwOTA4MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNjU3M2Q5MTlkODliNzlmZjQ2OWVkOGM3MzE2YTc1ZjIzOTljMjliNzYyNTM5YjU3OWU2MjAxMTcwYmZjYzMyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Pw1deEEpfnedMjmpsNYItl163I-8mY62HSGUviI6iKY',
      },
      
    },
   
    // More posts...
  ];
export default function Projects() {
  return (
    <div id="projects" className="bg-white py-20 sm:py-32 sm:pb-60">
      <div className="mx-auto max-w-7xl ">
        <h1 className='text-4xl font-bold mx-4 sm:text-7xl -mb-8 bg-gradient-to-r from-pink-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient pb-2' >Projects </h1>
        <div className="ml-6 lg:ml-6 sm:ml-6 md:ml-4 mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-s">
                <time className="text-gray-500">
                  {post.date}
                </time>
                <span
                  className="relative z-1 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-3xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href} target="_blank">
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
                <div className="mt-2 mr-2">
                <img src={post.owner.imageUrl} alt=""/>
                </div>
              </div>
              
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
