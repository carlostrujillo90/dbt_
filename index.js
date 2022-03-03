const customers = [
    {
        "name": "Canva",
        "img": "https://www.getdbt.com/ui/img/customers/canva-logo.png",
        "url": "https://www.canva.com/"
    },
    {
        "name": "Casper",
        "img": "https://www.getdbt.com/ui/img/customers/casper-sleep-logo.svg",
        "url": "https://casper.com/"
    },
    {
        "name": "Cisco",
        "img": "https://www.getdbt.com/ui/img/customers/cisco-logo.png",
        "url": "https://www.canva.com/"
    },
    {
        "name": "Domain",
        "img": "https://www.getdbt.com/ui/img/customers/domain-logo.svg",
        "url": "https://www.canva.com/"
    },
    {
        "name": "GitLab",
        "img": "https://www.getdbt.com/ui/img/customers/gitlab-logo.svg",
        "url": "https://www.gitlab.com/"
    },
    {
        "name": "HubSpot",
        "img": "https://www.getdbt.com/ui/img/customers/hubspot-logo.svg",
        "url": "https://www.hubspot.com/"
    },
    {
        "name": "JetBlue",
        "img": "https://www.getdbt.com/ui/img/customers/jetblue-airways-logo.svg",
        "url": "https://www.jetblue.com/"
    },
    {
        "name": "Kickstarter",
        "img": "https://www.getdbt.com/ui/img/customers/kickstarter-logo.svg",
        "url": "https://www.kickstarter.com/"
    }
    ];


    let output = `<ul class="customers-list">`;

    customers.map((customer) => {
        output +=
        `<li class="customer">
            <img src=${customer.img} alt=${customer.name} class="customer-logo">
            <h4 class="customer-name">${customer.name}</h4>
            <a href=${customer.url} target=_blank class="customer-button">
                Visit ${customer.name}
            </a>
        </li>`
    });

    output += `</ul>`;

    document.getElementsByClassName("customers-container")[0].innerHTML = output;