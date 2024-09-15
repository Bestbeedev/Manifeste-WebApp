import React from 'react'
import FaqItems from '../../../utilities/FaqItems'

const Faqs = () => {
  return (
    <div className='px-10 overflow-y-auto h-full flex flex-col py-4'>
      <h1 className='text-xl '>Foire Aux Questions (FAQ)</h1>
      <div className='my-5'>
      <FaqItems questions={"Qu'est-ce que [Nom de l'Application] ?"}>
        <p>[Nom de l'Application] est une plateforme en ligne dédiée à la diffusion d'enseignements bibliques et de sermons inspirants provenant de notre église. Elle permet à tous les membres et visiteurs de suivre nos prédications, études bibliques et autres contenus spirituels où qu'ils soient, à tout moment.</p>
      </FaqItems>
      <FaqItems questions={" Comment puis-je accéder aux vidéos ?"}>
        <p>Vous pouvez accéder à nos vidéos en vous rendant sur la page principale de [Nom de l'Application]. Une fois sur le site, vous pourrez naviguer à travers les différentes catégories (enseignements, sermons, études bibliques) ou utiliser la barre de recherche pour trouver une vidéo spécifique. Certaines vidéos sont accessibles sans inscription, mais d'autres nécessitent la création d'un compte.</p>
      </FaqItems>
      <FaqItems questions={"Ai-je besoin de créer un compte pour utiliser l'application ?"}>
        <p>Il est possible de regarder certaines vidéos sans inscription. Toutefois, la création d’un compte vous permet de bénéficier d’avantages supplémentaires tels que :</p>
        <ul className='list-disc py-3 px-6'>
          <li>Accès à des contenus exclusifs réservés aux membres.</li>
          <li>Possibilité de créer une playlist personnelle de vidéos préférées.Possibilité de créer une playlist personnelle de vidéos préférées.</li>
          <li>Recevoir des notifications lorsque de nouveaux enseignements sont publiés.</li>
          <li>Télécharger des vidéos pour les visionner hors ligne (si cette option est disponible).</li>
        </ul>
      </FaqItems>
      <FaqItems questions={"Comment puis-je créer un compte ?"}>
        <p>Pour créer un compte, suivez ces étapes simples :</p>
        <ol className='list-decimal py-3 px-6'>
          <li>Cliquez sur le bouton S'inscrire dans le coin supérieur droit de la page.</li>
          <li>Renseignez vos informations (nom, adresse e-mail, mot de passe).</li>
          <li>Confirmez votre adresse e-mail en suivant le lien envoyé dans votre boîte de réception.</li>
          <li>Connectez-vous avec vos identifiants et commencez à explorer notre contenu !</li>
        </ol>
      </FaqItems>
      <FaqItems questions={" Comment puis-je accéder aux vidéos ?"}>
        <p>Oui, la majorité des vidéos disponibles sur [Nom de l'Application] sont accessibles gratuitement. Cependant, nous proposons également des contenus premium réservés aux membres qui soutiennent financièrement notre ministère. Ces vidéos peuvent inclure des séminaires, des enseignements approfondis et d'autres ressources exclusives.</p>
      </FaqItems>
      <FaqItems questions={" Puis-je télécharger des vidéos pour les regarder hors ligne ?"}>
        <p>La fonctionnalité de téléchargement est réservée aux utilisateurs inscrits disposant d’un abonnement premium. Si vous avez un abonnement, vous pouvez télécharger les vidéos et les visionner même sans connexion internet. Pour ce faire, cliquez simplement sur l'icône de téléchargement située sous la vidéo.</p>
      </FaqItems>
      <FaqItems questions={"Quels types de contenus sont disponibles sur [Nom de l'Application] ?"}>
        <p>Nous proposons une variété de contenus, notamment :</p>
        <ul className='list-disc py-3 px-6'>
          <li>Sermons dominicaux.</li>
          <li>Enseignements bibliques approfondis.</li>
          <li>Séries thématiques sur divers sujets bibliques et théologiques.</li>
          <li>Discussions interactives sur des sujets d'actualité vus à travers la foi chrétienne.Discussions interactives sur des sujets d'actualité vus à travers la foi chrétienne.</li>
          <li>Émissions spéciales et événements en direct.</li>
        </ul>
      </FaqItems>
      <FaqItems questions={"Puis-je faire un don pour soutenir l'église et cette application ?"}>
        <p>Oui, vos dons sont grandement appréciés et contribuent à la diffusion de l'Évangile. Vous pouvez faire un don via l’application en cliquant sur l'onglet Faire un don. Différentes méthodes de paiement sont disponibles (carte bancaire, PayPal, virement, etc.). Votre soutien permet à notre ministère de continuer à proposer du contenu de qualité et à toucher plus de vies.</p>
      </FaqItems>  
             
      </div>

    </div>
  )
}

export default Faqs