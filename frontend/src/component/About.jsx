import Da from "./Da";

export default function About() {
  return  <>
  <div className="flex">
  <Da/>
    <section className="bg-yellow-50 py-20 px-6 md:px-20" id="about">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          About Me
        </h2>

        {/* Introduction */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
          Waxaan ahay <span className="font-semibold text-purple-700">Software Developer</span> oo 
          wax ka barta <span className="font-semibold text-green-700">Jaamacadda Hormuud</span>.  
          Waxaan ku takhasusay <span className="text-yellow-700 font-semibold">Computer Science</span> iyo 
          <span className="text-pink-700 font-semibold"> Software Engineering</span>, anigoo xiiseeya hal-abuurka iyo horumarinta tiknoolajiyada.
        </p>

        {/* Professional Experience */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Experience</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Macalin Ingiriis ah dugsi hoose muddo <span className="font-semibold text-purple-600">2 sano</span>.</li>
          <li>Shaqo xafiiska <span className="font-semibold text-teal-600">Finances</span>.</li>
          <li>Macalin Computer ah, baraya ardayda xirfadaha software iyo hardware.</li>
          <li>Maamule ku xigeen iyo madax shahaadooyinka ee <span className="font-semibold text-purple-600">Al-Hafiid Skills</span>.</li>
          <li>Aasaasaha shirkadda <span className="font-semibold text-pink-600">Somsoft Systems</span>.</li>
        </ul>

        {/* Technical Skills */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
        <p className="text-lg text-gray-700 mb-6">
          Waxaan leeyahay waayo-aragnimo ku saabsan horumarinta 
          <span className="text-red-600 font-semibold"> Web Applications</span> 
          anigoo adeegsanaya teknoolojiyada sida 
          <span className="text-indigo-600 font-semibold"> HTML, CSS, JavaScript, React.js</span> iyo 
          <span className="text-teal-600 font-semibold"> Node.js</span>. Sidoo kale waxaan faham u leeyahay 
          databases sida <span className="text-orange-600 font-semibold">MongoDB</span> iyo 
          <span className="text-blue-500 font-semibold"> MySQL</span>.
        </p>

        {/* Career Goal */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Career Goal</h3>
        <p className="text-lg text-gray-700">
          Hadafkaygu waa inaan noqdo <span className="font-bold text-pink-600">Full-Stack Developer</span> 
          awood u leh inuu dhiso barnaamijyo wax tar leh, isla markaana bulshada Soomaaliyeed iyo caalamkaba ku 
          biiriya <span className="font-bold text-green-700">horumar tiknoolajiyeed</span>.
        </p>
      </div>
    </section>
    </div>
  </>

  
}
