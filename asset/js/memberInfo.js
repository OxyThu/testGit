var member=[{
        "position":"President",
        "name":"Aung Si Thu",
        "committee":"CEC",
        "photo":"",
        "class":"Third Year",
        "phone":"09-428634653",
        "mail":"aungsithu@ucssittway.edu.mm",
        },
        {
        "position":"Co-President",
        "name":"U Lwin Myint",
        "committee":"CEC",
        "photo":"",
        "class":"Second Year ",
        "phone":"09-428634653",
        "mail":"aungsithu@ucssittway.edu.mm",
        },
        {
        "position":"Secretary",
        "name":"Min Soe Hlaing",
        "committee":"CEC",
        "photo":"",
        "class":"Second Year ",
        "phone":"09-428634653",
        "mail":"aungsithu@ucssittway.edu.mm",
        }
    ]

    console.log(member.length);
    console.log(member[0]);
    
    var filter=member.filter(f=>f.committee=="CEC");
    console.log(filter);