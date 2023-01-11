import lunabusPng from '../../assets/lunabus.png'
import devlandiaPng from '../../assets/devlandia.png'
import designSystemPng from '../../assets/designsystem.png'
import igniteShopPng from '../../assets/igniteshop.png'
import rocketHelpPng from '../../assets/rockethelp.png'
import jvboxPng from '../../assets/jvbox.png'

const devLandia = {
  title: 'DevLândia',
  description: 'Aplicativo de ensino a programação.',
  techs: ['React Native', 'TypeScript', 'Node', 'TypeORM', 'PostgreSQL'],
  image: devlandiaPng,
  github: 'https://github.com/jvolima/dev-landia',
}

const lunaBus = {
  title: 'Luna Bus',
  description:
    'Site para o transporte público de cidades de pequeno e médio porte.',
  techs: ['React', 'Next', 'TypeScript', 'Tailwind CSS'],
  image: lunabusPng,
  github: 'https://github.com/jvolima/lunabus',
  deploy: 'https://lunabus.com.br',
}

const designSystem = {
  title: 'Design System Ignite Call',
  description: 'Design System criado para utilizar na aplicação Ignite Call.',
  techs: ['React', 'StoryBook', 'Stitches', 'TypeScript'],
  image: designSystemPng,
  github: 'https://github.com/jvolima/design-system',
  deploy: 'https://jvolima.github.io/design-system/',
}

const igniteShop = {
  title: 'Ignite Shop',
  description: 'Site para venda de itens do Ignite.',
  techs: ['React', 'TypeScript', 'Next', 'Stitches', 'Stripe'],
  image: igniteShopPng,
  github: 'https://github.com/jvolima/ignite-shop',
}

const rocketHelp = {
  title: 'Rocket Help',
  description: 'Aplicativo de solicitações criado no Ignite lab.',
  techs: ['React Native', 'TypeScript', 'Firebase'],
  image: rocketHelpPng,
  github: 'https://github.com/jvolima/rockethelp',
}

const jvBox = {
  title: 'JvBox',
  description:
    'Site parecido com o Dropbox, onde você pode se cadastrar e salvar suas imagens e gifs favoritos.',
  techs: ['Java', 'Ajax', 'JavaScript'],
  image: jvboxPng,
  github: 'https://github.com/jvolima/JvBox',
}

export { devLandia, lunaBus, designSystem, igniteShop, rocketHelp, jvBox }
