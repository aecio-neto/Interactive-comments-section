import "./App.css"
import { CommentSection } from "./components/CommentSection"

// const usersData = {
//   currentUser: {
//     image: {
//       png: "./images/avatars/image-juliusomo.png",
//       webp: "./images/avatars/image-juliusomo.webp",
//     },
//     username: "andredev",
//   },
//   comments: [
//     {
//       id: 1,
//       content:
//         "Impressionante! Embora pareça que a funcionalidade de arrastar poderia ser aprimorada. Mas no geral, parece incrível. Você acertou no design e a responsividade em vários pontos de interrupção funciona muito bem.",
//       createdAt: new Date(),
//       score: 12,
//       user: {
//         image: {
//           png: "./images/avatars/image-amyrobson.png",
//           webp: "./images/avatars/image-amyrobson.webp",
//         },
//         username: "juliadeva",
//       },
//       replies: [],
//     },
//     {
//       id: 2,
//       content:
//         "Seu projeto parece incrível! Há quanto tempo você está programando? Eu ainda sou novo nisso, mas estou pensando em mergulhar no React em breve. Talvez você possa me dar uma ideia de onde posso aprender React? Obrigado!",
//       createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000,
//       score: 5,
//       user: {
//         image: {
//           png: "./images/avatars/image-maxblagun.png",
//           webp: "./images/avatars/image-maxblagun.webp",
//         },
//         username: "jordaodev",
//       },
//       replies: [
//         {
//           id: 3,
//           content:
//             "Se você ainda está aprendendo, eu recomendaria focar nos fundamentos de HTML, CSS e JS antes de considerar o React. É muito tentador pular adiante, mas estabeleça uma base sólida primeiro.",
//           createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000,
//           score: 4,
//           replyingTo: "jordaodev",
//           user: {
//             image: {
//               png: "./images/avatars/image-ramsesmiron.png",
//               webp: "./images/avatars/image-ramsesmiron.webp",
//             },
//             username: "ramondev",
//           },
//         },
//         {
//           id: 4,
//           content:
//             "Não poderia concordar mais com isso. Tudo se move tão rápido e sempre parece que todos conhecem a mais nova biblioteca/framework. Mas os fundamentos são o que permanece constante.",
//           createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000,
//           score: 2,
//           replyingTo: "jordaodev",
//           user: {
//             image: {
//               png: "./images/avatars/image-juliusomo.png",
//               webp: "./images/avatars/image-juliusomo.webp",
//             },
//             username: "rodrigopnc",
//           },
//         },
//       ],
//     },
//   ],
// }

export default function App() {
  return <CommentSection />
}
