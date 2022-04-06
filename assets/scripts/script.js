new Vue(
    {
        el: '#root',
        data: {
            profile:
            {
                name: 'Sofia',
                avatar: '_io',
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: false,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: false,
                    filtered: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: false,
                    filtered: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: false,
                    filtered: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: false,
                    filtered: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: false,
                    filtered: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: false,
                    filtered: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            showncontacts: [],
            msgpool: ['Ok!', 'Sono d\'accordo', 'Facciamo più tardi, va bene?', 'Ottimo  così', 'Per me no', 'Ci sentiamo dopo'],
            search: '',
            newmsg: '',
            currentchat: 0,
            openedchat: 0
        },
        methods: {
            datemodified: function (i) {
                let date = this.contacts[this.openedchat].messages[i].date;
                let newdate;
                if (date.length > 10) {
                    newdate = date.slice(10, 16);
                }
                else {
                    newdate = date.slice(0, 5)
                }
                return newdate;
            },
            newmessage: function (newmsg) {
                if (newmsg != '' && newmsg != null && newmsg != undefined && newmsg != ' ') {
                    let finaldate;
                    let current = new Date();
                    finaldate = current.toLocaleTimeString();
                    this.currentchat = this.openedchat
                    this.contacts[this.currentchat].messages.push({
                        date: finaldate,
                        message: newmsg,
                        status: 'sent'
                    })
                    this.newmsg = "";
                    setTimeout(this.answer, 1000);
                }
            },
            answer: function () {
                let r = Math.round(Math.random() * (this.msgpool.length - 1));
                let finaldate;
                let current = new Date();
                finaldate = current.toLocaleTimeString();
                this.contacts[this.currentchat].messages.push({
                    date: finaldate,
                    message: this.msgpool[r],
                    status: 'received'
                })
            },
            changechat: function (i) {
                this.contacts[this.openedchat].visible = false;
                this.openedchat = i;
                this.contacts[i].visible = true
            },
            searchcon: function (search) {
                this.showncontacts = this.contacts.filter(elm => elm.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            },
            hidepopup: function () {
                document.getElementById("notificationspopup").style.display = "none"
            }
        }
    });