import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '5e7'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b4b'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/warband',
            component: ComponentCreator('/docs/tags/warband', '2b8'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'cdb'),
            routes: [
              {
                path: '/docs/1 Battle Rules/1.1 Profile Characteristics',
                component: ComponentCreator('/docs/1 Battle Rules/1.1 Profile Characteristics', '6d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1 Battle Rules/1.10 Animals, Mounts and Monsters',
                component: ComponentCreator('/docs/1 Battle Rules/1.10 Animals, Mounts and Monsters', 'e02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1 Battle Rules/1.11 Arming and Equipping Warriors',
                component: ComponentCreator('/docs/1 Battle Rules/1.11 Arming and Equipping Warriors', '695'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1 Battle Rules/1.12 Magic',
                component: ComponentCreator('/docs/1 Battle Rules/1.12 Magic', 'cf5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1 Battle Rules/1.13 Multiplayer',
                component: ComponentCreator('/docs/1 Battle Rules/1.13 Multiplayer', 'd95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1 Battle Rules/1.2 Turn Sequence',
                component: ComponentCreator('/docs/1 Battle Rules/1.2 Turn Sequence', '799'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1 Battle Rules/1.3 Movement',
                component: ComponentCreator('/docs/1 Battle Rules/1.3 Movement', '872'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1 Battle Rules/1.4 Charges',
                component: ComponentCreator('/docs/1 Battle Rules/1.4 Charges', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1 Battle Rules/1.5 Close Combat',
                component: ComponentCreator('/docs/1 Battle Rules/1.5 Close Combat', 'f18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1 Battle Rules/1.6 Shooting',
                component: ComponentCreator('/docs/1 Battle Rules/1.6 Shooting', '46c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1 Battle Rules/1.7 Wounds and Injuries',
                component: ComponentCreator('/docs/1 Battle Rules/1.7 Wounds and Injuries', 'f15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1 Battle Rules/1.8 Psychology, Regeneration',
                component: ComponentCreator('/docs/1 Battle Rules/1.8 Psychology, Regeneration', '962'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1 Battle Rules/1.9 Deployment and Rout Tests',
                component: ComponentCreator('/docs/1 Battle Rules/1.9 Deployment and Rout Tests', '0fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2 Campaign Rules/2.1 Post-game Sequence',
                component: ComponentCreator('/docs/2 Campaign Rules/2.1 Post-game Sequence', '817'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2 Campaign Rules/2.2 Experience',
                component: ComponentCreator('/docs/2 Campaign Rules/2.2 Experience', '751'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2 Campaign Rules/2.3 Hired Swords',
                component: ComponentCreator('/docs/2 Campaign Rules/2.3 Hired Swords', '29f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2 Campaign Rules/2.4 Recruiting a Warband',
                component: ComponentCreator('/docs/2 Campaign Rules/2.4 Recruiting a Warband', '501'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/3 Warband Lists/3.1 Mercenary Warbands',
                component: ComponentCreator('/docs/3 Warband Lists/3.1 Mercenary Warbands', 'f98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/3 Warband Lists/3.2 Witch Hunters',
                component: ComponentCreator('/docs/3 Warband Lists/3.2 Witch Hunters', '550'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/3 Warband Lists/3.3 Undead',
                component: ComponentCreator('/docs/3 Warband Lists/3.3 Undead', '7f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/3 Warband Lists/3.4 Night Goblins',
                component: ComponentCreator('/docs/3 Warband Lists/3.4 Night Goblins', 'f8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/3 Warband Lists/3.5 Cult of the Possessed',
                component: ComponentCreator('/docs/3 Warband Lists/3.5 Cult of the Possessed', 'a49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/3 Warband Lists/3.6 Skaven Clan Eshin',
                component: ComponentCreator('/docs/3 Warband Lists/3.6 Skaven Clan Eshin', 'fc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/3 Warband Lists/3.7 Sisters of Sigmar',
                component: ComponentCreator('/docs/3 Warband Lists/3.7 Sisters of Sigmar', 'fcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/4 Magic/Chaos Rituals',
                component: ComponentCreator('/docs/4 Magic/Chaos Rituals', '6fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/4 Magic/Hedge Magic',
                component: ComponentCreator('/docs/4 Magic/Hedge Magic', 'ee0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/4 Magic/Little Waaagh',
                component: ComponentCreator('/docs/4 Magic/Little Waaagh', '40f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/4 Magic/Lore of Vampires',
                component: ComponentCreator('/docs/4 Magic/Lore of Vampires', '81e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/4 Magic/Necromancy',
                component: ComponentCreator('/docs/4 Magic/Necromancy', 'f69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/4 Magic/Prayers of Sigmar',
                component: ComponentCreator('/docs/4 Magic/Prayers of Sigmar', 'f9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/4 Magic/Sorcery of Rhuin',
                component: ComponentCreator('/docs/4 Magic/Sorcery of Rhuin', '419'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/5 Reference/5.1 Skill Lists',
                component: ComponentCreator('/docs/5 Reference/5.1 Skill Lists', '5e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/5 Reference/5.2 Price Chart',
                component: ComponentCreator('/docs/5 Reference/5.2 Price Chart', '8b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/5 Reference/5.3 Heroes post-game Injuries Table',
                component: ComponentCreator('/docs/5 Reference/5.3 Heroes post-game Injuries Table', 'b5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/5 Reference/5.4 Exploration and Experience Tables',
                component: ComponentCreator('/docs/5 Reference/5.4 Exploration and Experience Tables', 'b30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/5 Reference/5.5 Combat Tables',
                component: ComponentCreator('/docs/5 Reference/5.5 Combat Tables', 'eb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/5 Reference/5.6 Weapons Notes',
                component: ComponentCreator('/docs/5 Reference/5.6 Weapons Notes', 'a30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/5 Reference/5.7 Critical Wounds, Overkill, Nimble',
                component: ComponentCreator('/docs/5 Reference/5.7 Critical Wounds, Overkill, Nimble', '541'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/5 Reference/5.8 Interception',
                component: ComponentCreator('/docs/5 Reference/5.8 Interception', '9ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/5 Reference/5.9 Exploration Chart',
                component: ComponentCreator('/docs/5 Reference/5.9 Exploration Chart', 'e94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/5 Reference/5.99 Version History',
                component: ComponentCreator('/docs/5 Reference/5.99 Version History', 'bc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/6 Scenarios/6.1 Scenarios',
                component: ComponentCreator('/docs/6 Scenarios/6.1 Scenarios', '258'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/6 Scenarios/Scenario - Dark Ritual',
                component: ComponentCreator('/docs/6 Scenarios/Scenario - Dark Ritual', '25e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/6 Scenarios/Scenario - Defend the Find',
                component: ComponentCreator('/docs/6 Scenarios/Scenario - Defend the Find', '2b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/6 Scenarios/Scenario - Down at the Docks',
                component: ComponentCreator('/docs/6 Scenarios/Scenario - Down at the Docks', '7b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/6 Scenarios/Scenario - Dragon Hunt',
                component: ComponentCreator('/docs/6 Scenarios/Scenario - Dragon Hunt', '5c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/6 Scenarios/Scenario - Enter the Necromancer’s Tower',
                component: ComponentCreator('/docs/6 Scenarios/Scenario - Enter the Necromancer’s Tower', 'cc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/6 Scenarios/Scenario - Lost in the Fog',
                component: ComponentCreator('/docs/6 Scenarios/Scenario - Lost in the Fog', 'fce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/6 Scenarios/Scenario - Rat Race',
                component: ComponentCreator('/docs/6 Scenarios/Scenario - Rat Race', '16b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/6 Scenarios/Scenario - Stagecoach Ambush',
                component: ComponentCreator('/docs/6 Scenarios/Scenario - Stagecoach Ambush', '61a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/6 Scenarios/Scenario - Stake-Out',
                component: ComponentCreator('/docs/6 Scenarios/Scenario - Stake-Out', 'dd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/6 Scenarios/Scenario - The Middle Bridge',
                component: ComponentCreator('/docs/6 Scenarios/Scenario - The Middle Bridge', 'd89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coreheim',
                component: ComponentCreator('/docs/coreheim', '25c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coreheim & Roll High Conversion',
                component: ComponentCreator('/docs/Coreheim & Roll High Conversion', '212'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FAQ',
                component: ComponentCreator('/docs/FAQ', '953'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
