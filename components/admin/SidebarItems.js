const SidebarItems = {
    authorities:[
        "Authorities",
        {
            Label: "Search",
            Icon: "search",
            Children: [
                {
                    Label: "All authorities",
                    href: "/admin/authorities/allAuth"
                },
                {
                    Label: "Predefined",
                    href: "/admin/authorities/predefined"
                },

            ]
        },
        {
            Label: "Authorities",
            Icon: "settings_input_svideo",
            Children: [
                {
                    Label: "Author",
                    href: "/admin/authorities/author"
                },
                {
                    Label: "headings",
                    href: "/admin/authorities/headings"
                },
                {
                    Label: "Publisher",
                    href: "/admin/authorities/publisher"
                },
                {
                    Label: "Series",
                    href: "/admin/authorities/series"
                },
                {
                    Label: "Sub-series",
                    href: "/admin/authorities/sub_series"
                },
                {
                    Label: "Collection Title",
                    href: "/admin/authorities/collection_title"
                },
                {
                    Label: "Uniform Titles",
                    href: "/admin/authorities/uniform-titles"
                },
                {
                    Label: "Class number",
                    href: "/admin/authorities/class_number"
                },


            ]
        },
        {
            Label: "Baskets",
            Icon: "shopping_basket",
            Children: [
                {
                    Label: "Management",
                    href: "/admin/authorities/basket/management"
                },
                {
                    Label: "Collection",
                    href: "/admin/authorities/basket/collection"
                },
                {
                    Label: "Tag on/off",
                    href: "/admin/authorities/basket/tags"
                },
                {
                    Label: "Actions",
                    href: "/admin/authorities/basket/actions"
                },
            ]
        },
        {
            Label: "Semantic",
            Icon: "spellcheck",
            Children: [
                {
                    Label: "Synonyms",
                    href: "/admin/authorities/synonyms"
                },
                {
                    Label: "Stopwords",
                    href: "/admin/authorities/stopwords"
                },
            ]
        },
        {
            Label: "Management",
            Icon: "settings_applications",
            Children: [
                {
                    Label: "Import",
                    href: "/admin/authorities/import"
                },
            ]
        },

    ],
    circulation:[
        "Circulations",
        {
            Label: "Circulation",
            Icon: "home",
            Children: [
                {
                    Label: "Prêt de documents",
                    href: "/admin/circulation/Circulations/pretDoc"
                },
                {
                    Label: "Retour de documents",
                    href: "/admin/circulation/Circulations/retDoc"
                },
                {
                    Label: "Documents À traiter",
                    href: "/admin/circulation/Circulations/taritDoc"
                },

                {
                    Label: "Groupes de lecteurs",
                    href: "/admin/circulation/Circulations/groups"
                },
                {
                    Label: "Nouveau lecteur",
                    href: "/admin/circulation/Circulations/Borrowers"
                },
                {
                    Label: "Périodiques",
                    href: "/admin/circulation/Circulations/periodique"
                },
                {
                    Label: "Recharch Personalisé",
                    href: "/admin/circulation/Circulations/recharch"
                },
                {
                    Label: "List lecteur (Borrows)",
                    href: "/admin/circulation/Circulations/Borrowers"
                },


            ]
        },
        {
            Label: "Paniers",
            Icon: "shopping_basket",
            Children: [
                {
                    Label: "Gestion",
                    href: "/admin/Circulations/author"
                },
                {
                    Label: "Collecte",
                    href: "/admin/Circulations/headings"
                },
                {
                    Label: "Pointage",
                    href: "/admin/Circulations/Pointage"
                },
                {
                    Label: "Actions",
                    href: "/admin/Circulations/series"
                },
            ]
        },
        {
            Label: "Visualiser",
            Icon: "settings_input_svideo",
            Children: [
                {
                    Label: "Exemplaire",
                    href: "/admin/circulation/Visualiser/Exemplaire"
                },
                {
                    Label: "Notice",
                    href: "/admin/Circulations/Exemplaire/notice"
                },
            ]
        },
        {
            Label: "Réservations",
            Icon: "spellcheck",
            Children: [
                {
                    Label: "En cours",
                    href: "/admin/circulation/Reservation/En_cour"
                },
                {
                    Label: "Dépassées",
                    href: "/admin/circulation/Reservation/Depasse"
                },
                {
                    Label: "Document à ranger",
                    href: "/admin/circulation/Reservation/docranger"
                },
            ]
        },
        {
            Label: "Suggestions",
            Icon: "spellcheck",
            Children: [
                {
                    Label: "Suggestions",
                    href: "/admin/circulation/Suggestions"
                },
            ]
        },


    ],

    reporting:[
        "reporting",
        {
            Label: "Stats",
            Icon: "search",
            Children: [
                {
                    Label: "Customizable",
                    href: "/admin/reporting/customizablz"
                },
                {
                    Label: "Configurable",
                    href: "/admin/reporting/configurable"
                },

            ]
        },
        {
            Label: "Loans",
            Icon: "settings_input_svideo",
            Children: [
                {
                    Label: "Current Loans",
                    href: "/admin/reporting/currentloans"
                },
                {
                    Label: "Delay by Reader",
                    href: "/admin/reporting/delaybyreader"
                },
                {
                    Label: "Delay by Date",
                    href: "/admin/reporting/delaybydate"
                },
                {
                    Label: "Loan Group",
                    href: "/admin/reporting/loangroup"
                },
                {
                    Label: "Delay by Group",
                    href: "/admin/reporting/delaybygroup"
                },

            ]
        },
        {
            Label: "Reservations",
            Icon: "spellcheck",
            Children: [
                {
                    Label: "In Progress",
                    href: "/admin/reporting/inprogress"
                },
                {
                    Label: "Treat",
                    href: "/admin/reporting/totreat"
                },

            ]
        },
        {
            Label: "Readers",
            Icon: "spellcheck",
            Children: [
                {
                    Label: "Current Readers",
                    href: "/admin/reporting/currentreaders"
                },
                {
                    Label: "End of Subscription",
                    href: "/admin/reporting/endofsubscription"
                },
                {
                    Label: "Subscription Exceeded",
                    href: "/admin/reporting/subscriptionexceed"
                },
                {
                    Label: "Category to Change",
                    href: "/admin/reporting/categorytochange"
                },
                        ]
        },
        {
            Label: "Periodic",
            Icon: "settings_applications",
            Children: [
                {
                    Label: "Collection Stat",
                    href: "/admin/reporting/collectionstat"
                },
                {
                    Label: "Circulations Stat",
                    href: "/admin/reporting/circulationstat"
                },
                {
                    Label: "Simplified Circulations",
                    href: "/admin/reporting/simplifiedcirculation"
                },
            ]
        },
        {
            Label: "BarCode",
            Icon: "settings_applications",
            Children: [
                {
                    Label: "Free Generated",
                    href: "/admin/reporting/freegenerated"
                },
            ]
        },
        {
            Label: "Labels",
            Icon: "settings_applications",
            Children: [
                {
                    Label: "Plank Models",
                    href: "/admin/reporting/plankmodels"
                },
            ]
        },
        {
            Label: "Templates",
            Icon: "settings_applications",
            Children: [
                {
                    Label: "Notices",
                    href: "/admin/reporting/notices"
                },
                {
                    Label: "Circulations List",
                    href: "/admin/reporting/circulationlist"
                },
                {
                    Label: "Bannettes",
                    href: "/admin/reporting/bannettes"
                },
            ]
        },
        {
            Label: "OPAC",
            Icon: "settings_applications",
            Children: [
                {
                    Label: "Mail Compaign",
                    href: "/admin/reporting/mailcompaign"
                },
            ]
        },

    ]
}
export default SidebarItems
