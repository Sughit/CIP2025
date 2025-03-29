import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="pt-20 h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Introducere */}
      <section
        id="intro"
        className="snap-start min-h-screen flex flex-col justify-center items-center bg-green-100 p-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          <p align='center'>Bine ai venit în lumea Inteligenței Artificiale!</p>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 max-w-2xl text-center mb-6"
        >
          Inteligența Artificială (IA) dezvoltă sisteme ce pot simula procesele cognitive umane precum învățarea și raționamentul. Pe acest site vei găsi o analiză a <b>avantajelor</b>, cum ar fi automatizarea și inovația, și a <b>dezavantajelor</b>, precum provocările etice și impactul asupra locurilor de muncă.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-700 max-w-2xl text-center"
        >
          Explorează secțiunile de mai jos pentru a te informa și a-ți forma propria opinie asupra acestui subiect fascinant.
        </motion.p>
      </section>

      {/* Pro */}
      <section
        id="pro"
        className="snap-start min-h-screen flex flex-col justify-center items-center bg-green-200 p-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Argumente Pro
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 list-disc space-y-2"
        >
          <li>
            <b>Crește eficiența și productivitatea</b>
            <p>IA poate automatiza sarcini repetitive și consumatoare de timp, eliberând resurse umane pentru activități cu valoare adăugată. Astfel, companiile pot opera mai rapid, iar rezultatele obținute se pot îmbunătăți semnificativ.</p>
          </li>
          <li>
            <b>Automatizează procese repetitive</b>
            <p>Prin preluarea activităților de rutină, sistemele inteligente pot reduce erorile umane și pot asigura o consistență a proceselor. Aceasta permite angajaților să se concentreze pe sarcini strategice și creative.</p>
          </li>
          <li>
            <b>Îmbunătățește luarea deciziilor prin analiza datelor</b>
            <p>IA poate procesa volume mari de informații și poate identifica modele sau tendințe care ar putea scăpa observației umane. Acest lucru ajută la luarea unor decizii bazate pe date concrete, crescând precizia și eficacitatea acestora.</p>
          </li>
          <li>
            <b>Stimulează inovația în diverse domenii</b>
            <p>Integrarea tehnologiilor inteligente nu doar optimizează procesele existente, ci deschide și noi oportunități pentru dezvoltare. De la medicină la transport și educație, IA inspiră soluții inovatoare care pot transforma industrii întregi.</p>
          </li>
        </motion.ul>
      </section>

      {/* Contra */}
      <section
        id="contra"
        className="snap-start min-h-screen flex flex-col justify-center items-center bg-green-300 p-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Argumente Contra
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 list-disc space-y-2"
        >
          <li>Risc de pierdere a locurilor de muncă</li>
          <li>Provocări etice și de confidențialitate</li>
          <li>Dependență excesivă de tehnologie</li>
          <li>Riscuri de erori și decizii inexacte</li>
        </motion.ul>
      </section>

      {/* Concluzie */}
      <section
        id="concluzie"
        className="snap-start min-h-screen flex flex-col justify-center items-center bg-green-400 p-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Concluzie
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 max-w-2xl text-center"
        >
          Inteligența Artificială aduce cu sine avantaje semnificative, dar și provocări serioase. Este important
          să evaluăm obiectiv beneficiile și riscurile, astfel încât să putem utiliza această tehnologie în mod
          responsabil și etic.
        </motion.p>
      </section>
    </div>
  );
};

export default Home;
