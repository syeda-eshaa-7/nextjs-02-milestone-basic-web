



import Header from '../components/Header';

const Home = () => {
  return (
    <div>
     
     <main className="container mx-auto p-4">
    
        <section className="bg-blue-600 text-white py-20 text-center">
          <h2 className="text-4xl font-bold">Welcome to My Next.js Site</h2>
          <p className="mt-4 text-lg">A modern web application built with Next.js and Tailwind CSS.</p>
          <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded">Get Started</button>
        </section>
        
        <section className="py-16">
          <h3 className="text-3xl text-center font-bold mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'">
              <h4 className="text-xl font-semibold">Fast Performance</h4>
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illum?</p>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'">
              <h4 className="text-xl font-semibold">SEO Friendly</h4>
              <p className="mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat id rem praesentium architecto eaque debitis?.</p>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'">
              <h4 className="text-xl font-semibold">Responsive Design</h4>
              <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ea, sapiente quidem odit porro </p>
            </div>
          </div>
        </section>

      
        <section className="bg-gray-200 py-16 text-center">
          <h3 className="text-3xl font-bold">Join Us Today!</h3>
          <p className="mt-4">Sign up for our newsletter to stay updated.</p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">Sign Up</button>
        </section>
      </main>

     
    
    </div>
  );
};

export default Home;
