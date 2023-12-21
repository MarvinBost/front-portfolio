/*
"navbar": {
        "title": "Marvin Bost",
        "menus": [
            {
                "title": "Mes realisations",
                "type": "link",
                "link": "#works"
            },
            {
                "title": "Mes services",
                "type": "dropdown",
                "menus": [
                    {
                        "title": "Site Web",
                        "type": "link",
                        "link": "#web"
                    },
                    {
                        "title": "Consultant",
                        "type": "link",
                        "link": "#consultant"
                    },
                    {
                        "title": "Mentor / Formateur",
                        "type": "link",
                        "link": "#mentor"
                    }
                ]
            }
        ]
    },
*/

export interface NavbarInterface {
  title: string;
  menus: MenuInterface[];
}

export interface MenuInterface {
  title: string;
  type: string;
  link?: string;
  menus?: MenuInterface[];
}
