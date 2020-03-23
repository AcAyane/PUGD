const SidebarItems = [
    "Authorities",
    {
        Label: "Search",
        Children: [
            {
                Label: "All authorities",
                href: "/admin/authorities/allAuth"
            },
            {
                Label: "Predefined",
                href: "/admin/authorities/Predefined"
            },

        ]
    },
    {
        Label: "Authorities",
        Children: [
            {
                Label: "Author",
                href: "/admin/authorities/Author"
            },
            {
                Label: "headings",
                href: "/admin/authorities/headings"
            },
            {
                Label: "Publisher",
                href: "/admin/authorities/Publishers"
            },
            {
                Label: "Series",
                href: "/admin/authorities/Series"
            },
            {
                Label: "Sub-series",
                href: "/admin/authorities/Sub-series"
            },
            {
                Label: "Collection Title",
                href: "/admin/authorities/Collection-Title"
            },
            {
                Label: "Uniform Titles",
                href: "/admin/authorities/Uniform-Titles"
            },
            {
                Label: "Class number",
                href: "/admin/authorities/Class-number"
            },


        ]
    },
    {
        Label: "Baskets",
        Children: [
            {
                Label: "Management",
                href: "/admin/authorities/Management"
            },
             {
                Label: "Collection",
                href: "/admin/authorities/Collection"
            },
             {
                Label: "Tag on/off",
                href: "/admin/authorities/Tags"
            },
             {
                Label: "Actions",
                href: "/admin/authorities/Actions"
            }, 
        ]
    },
    {
        Label: "Semantic",
        Children: [
            {
                Label: "Synonyms",
                href: "/admin/authorities/Synonyms"
            }, 
            {
                Label: "Stopwords",
                href: "/admin/authorities/Stopwords"
            },  
        ]
    },
    {
        Label: "Management",
        Children: [
            {
                Label: "Import",
                href: "/admin/authorities/Import"
            },  
        ]
    },

]
export default SidebarItems