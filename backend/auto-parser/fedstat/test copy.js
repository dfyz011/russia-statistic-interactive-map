
(() => {
  const rawGrid = `
  {
    "declaration": {
        "attributes": {
            "version": "1.0",
            "encoding": "utf-8"
        }
    },
    "elements": [
        {
            "type": "element",
            "name": "GenericData",
            "attributes": {
                "xmlns": "http://www.SDMX.org/resources/SDMXML/schemas/v1_0/message",
                "xmlns:common": "http://www.SDMX.org/resources/SDMXML/schemas/v1_0/common",
                "xmlns:compact": "http://www.SDMX.org/resources/SDMXML/schemas/v1_0/compact",
                "xmlns:cross": "http://www.SDMX.org/resources/SDMXML/schemas/v1_0/cross",
                "xmlns:generic": "http://www.SDMX.org/resources/SDMXML/schemas/v1_0/generic",
                "xmlns:query": "http://www.SDMX.org/resources/SDMXML/schemas/v1_0/query",
                "xmlns:structure": "http://www.SDMX.org/resources/SDMXML/schemas/v1_0/structure",
                "xmlns:utility": "http://www.SDMX.org/resources/SDMXML/schemas/v1_0/utility",
                "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                "xsi:schemaLocation": "http://www.SDMX.org/resources/SDMXML/schemas/v1_0/message SDMXMessage.xsd"
            },
            "elements": [
                {
                    "type": "element",
                    "name": "Header",
                    "attributes": {
                        "Id": "singHead"
                    },
                    "elements": [
                        {
                            "type": "element",
                            "name": "ID",
                            "elements": [
                                {
                                    "type": "text",
                                    "text": "-136656213"
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "Test",
                            "elements": [
                                {
                                    "type": "text",
                                    "text": "false"
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "Truncated",
                            "elements": [
                                {
                                    "type": "text",
                                    "text": "false"
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "Prepared",
                            "elements": [
                                {
                                    "type": "text",
                                    "text": "2020-06-28T01:16:50"
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "Extracted",
                            "elements": [
                                {
                                    "type": "text",
                                    "text": "2020-06-28T01:16:50"
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "Sender",
                            "attributes": {
                                "id": "UIS"
                            },
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "Name",
                                    "attributes": {
                                        "xml:lang": "en"
                                    },
                                    "elements": [
                                        {
                                            "type": "text",
                                            "text": "Official statistics"
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "Name",
                                    "attributes": {
                                        "xml:lang": "ru"
                                    },
                                    "elements": [
                                        {
                                            "type": "text",
                                            "text": "Государственная статистика"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "DataSetAgency",
                            "elements": [
                                {
                                    "type": "text",
                                    "text": "1"
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "DataSetID",
                            "elements": [
                                {
                                    "type": "text",
                                    "text": "9000559"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "element",
                    "name": "CodeLists",
                    "elements": [
                        {
                            "type": "element",
                            "name": "structure:CodeList",
                            "attributes": {
                                "id": "s_OKEI"
                            },
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "structure:Name",
                                    "attributes": {
                                        "xml:lang": "ru"
                                    },
                                    "elements": [
                                        {
                                            "type": "text",
                                            "text": "Классификатор единиц измерения"
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "166"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Килограмм"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "796"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Штука"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "799"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Миллион штук"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "169"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Тысяча тонн"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "385"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Миллион рублей"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "386"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Миллиард рублей"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "536"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Тонна в смену"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "538"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Тысяча тонн в год"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "553"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Тысяча тонн переработки в сутки"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "642"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Единица"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "744"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Процент"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "792"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Человек"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "839"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Комплект"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "w2:p_okei:172"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Миллион тонн"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "172"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Тонна условного топлива"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "structure:CodeList",
                            "attributes": {
                                "id": "s_OKATO"
                            },
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "structure:Name",
                                    "attributes": {
                                        "xml:lang": "ru"
                                    },
                                    "elements": [
                                        {
                                            "type": "text",
                                            "text": "Классификатор объектов административно-территориального деления (ОКАТО)"
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "643"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Российская Федерация"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "structure:CodeList",
                            "attributes": {
                                "id": "s_pervedprog"
                            },
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "structure:Name",
                                    "attributes": {
                                        "xml:lang": "ru"
                                    },
                                    "elements": [
                                        {
                                            "type": "text",
                                            "text": "Перечень ведомственных программ"
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "w1:s_pervedprog:12.056.0000013"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Медико-биологическое и медико-санитарное обеспечение спортсменов сборных команд Российской Федерации"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "09.082.0014"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Поддержка начинающих фермеров на период на 2012-2014 годы"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "09.187.0016"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Развитие высших учебных заведений и учебных центров Минобороны России для обучения (подготовки) иностранных специалистов из состава экипажей и боевых расчетов поставляемых на экспорт вооружения и военной техники (2012-2014 годы)"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "w1:s_pervedprog:11.082.0000012"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Развитие инфраструктуры и логистического обеспечения агропродовольственного рынка, предусматривающее"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "09.020.0009"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Развитие малого и среднего предпринимательства в отраслях промышленности и торговли"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "09.082.0011"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Развитие птицеводства в Российской Федерации на 2010-2012 годы"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "09.082.0015"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Развитие семейных животноводческих ферм на базе крестьянских (фермерских) хозяйств на 2012-2014 годы"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "structure:CodeList",
                            "attributes": {
                                "id": "s_perael"
                            },
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "structure:Name",
                                    "attributes": {
                                        "xml:lang": "ru"
                                    },
                                    "elements": [
                                        {
                                            "type": "text",
                                            "text": "Перечень федеральных министерств, служб, агенств и отдельных организаций"
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "56"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Министерство здравоохранения Российской Федерации"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "187"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Министерство обороны Российской Федерации"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "20"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Министерство промышленности и торговли Российской Федерации"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "82"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Министерство сельского хозяйства Российской Федерации"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "structure:CodeList",
                            "attributes": {
                                "id": "s_perezelind"
                            },
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "structure:Name",
                                    "attributes": {
                                        "xml:lang": "ru"
                                    },
                                    "elements": [
                                        {
                                            "type": "text",
                                            "text": "Перечень целевых индикаторов ведомственных программ"
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.5"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Доля заказов, переданных малым предприятиям в соответствии со статьей 15 Федерального закона от 21.07.2005 № 94-ФЗ, от общего объема размещенных заказов Минпромторга России"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.1"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Доля издержек на преодоление административных барьеров в выручке субъектов малого и среднего предпринимательства (опросный показатель, по данным Минэкономразвития России)"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000011.3"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Доля импорта мяса птицы в общих ресурсах мяса птицы"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.4"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Доля позиций продукции, подлежащей декларированию соответствия, от общего числа позиций, подлежащих обязательному подтверждению соответств"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.11"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Доля продукции малых и средних предприятий легкой промышленности в регионах Уральского, Сибирского и Дальневосточного федеральных округов от общего объема реализации продукции легкой промышленности в УФО, СФО и ДФО"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.9"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Доля субъектов МСП, удовлетворяющих требованиям подпункта б пункта 2 статьи 1 Федерального закона №173-ФЗ от 17.07.2009, продливших договор аренды недвижимого имущества на желаемый срок с ФГУПами, подведомственными Минпромторгу России"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000013.3"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество внедренных инновационных технологий медико-биологического и медико-санитарного обеспечения в процесс подготовки кандидатов в спортивные сборные команды Российской Федерации по видам спорта  по годам"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000016.5"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество вузов и учебных заведений Минобороны России, оснащенных оборудованием для интерактивного взаимодействия с органами управления подготовкой ИВС"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.7"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество консультаций по вопросам формирования программ развития малого и среднего предпринимательства в промышленности и торговле, оказанных органам местного самоуправления монопрофильных городов Российской Федерации"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000014.1"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество крестьянских (фермерских) хозяйств, осуществляющих проекты развития своих крестьянских (фермерских) хозяйств с помощью государственной поддержке"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.13"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество малых инновационных предприятий в фармацевтической промышленности"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.14"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество малых инновационных предприятий в химической промышленности"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.2"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество малых предприятий, занятых в обрабатывающей промышленности, в % от общего числа малых предприятий"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000016.3"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество мест для проживания ИВС, подготовленных в соответствии с требованиями заказчика"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000016.2"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество поставленных тренажеров и специализированных учебных комплексов, соответствующих экспортным образцам военно-воздушной техники (ВВТ)"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.8"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество предприятий, ознакомленных с лучшими практиками применения технологий дизайна в промышленности в рамках реализации мероприятий Концепции развития промышленного дизайна на период до 2015 года"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000016.6"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество преподавателей, привлекаемых к обучению ИВС, прошедших профессиональную переподготовку и (или) повысивших квалификацию за период реализации программы"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000016.1"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество принятых (внесенных на утверждение) нормативно-правовых актов по вопросам совершенствования подготовки иностранных военных специалистов (ИВС)"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.10"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество проектов, предложенных Минпрмторгом России ГК Российская корпорация нанотехнологий для возможного финансирования"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000014.2"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество созданных рабочих мест"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.16"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество утвержденных региональных программ развития торговли"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000016.4"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество учебных классов, (аудиторий) для обучения ИВС, подготовленных в соответствии с требованиями заказчика"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000013.1"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Количество учреждений, участвующих в медико-биологическом и медико-санитарном обеспечении кандидатов в спортивные сборные команды Российской Федерации по видам спорта"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.3"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Оборот малых предприятий, занятых в обрабатывающей промышленности, в % от общего оборота малых предприятий"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.15"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Объем выпуска изделий организациями народных художественных промыслов (без НДС и акцизов)"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.12"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Объем выпуска продукции малых и средних предприятий - производителей товаров для детей (без НДС, по данным Ассоциации индустрии детских товаров)"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000009.6"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Объем субсидий, предоставленных малому и среднему бизнесу по линии Минпромторга России"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000011.2"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Производство мяса птицы в расчете на душу населения"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000011.1"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Производство мяса птицы, млн. тонн в убойной массе"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000011.4"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Производство яиц"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000011.5"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Производство яиц в расчете на душу населения"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000015.1"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Строительство или модернизация семейных животноводческих ферм"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000012.6"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Увеличение мощности по первичной переработке молока"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000012.2"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Увеличение мощности по перевалке портовых элеваторов"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000012.3"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Увеличение мощности пунктов перевалки зерна на основных судоходных реках"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000012.4"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Увеличение обновленных и созданных мощностей по подработке и хранению плодоовощной продукции"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000012.1"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Увеличение объема модернизированных мощностей в общем объеме предприятий по подработке, хранению и перевалке зерна (без учета портовых элеваторов)"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000012.5"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Увеличение среднегодовой производственной мощности по убою скота и выпуску мяса на предприятиях отрасли за счет модернизации действующих предприятий и строительства новых современных производств с учетом новейших достижений в области первичной переработки скота"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000012.7"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Увеличение экспортного потенциала логистической цепи за счет строительства и модернизации мощностей по переработке, хранению и перевалке зерна"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "structure:Code",
                                    "attributes": {
                                        "value": "0000013.2"
                                    },
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "structure:Description",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Укомплектованность спортивных сборных команд Российской Федерации врачами и массажистами"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "element",
                    "name": "Description",
                    "attributes": {
                        "Id": "signlistOfSeriesKeys"
                    },
                    "elements": [
                        {
                            "type": "element",
                            "name": "Indicator",
                            "attributes": {
                                "id": "34112",
                                "name": "Базовый показатель по целевой программе (подпрограмме) ведомства"
                            },
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "Units",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "Unit",
                                            "attributes": {
                                                "value": "-"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "Periodicities",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "Periodicity",
                                            "attributes": {
                                                "value": "Годовая - не охарактеризована",
                                                "releases": "7 апреля",
                                                "next-release": "07.04.2021"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "DataRange",
                                    "attributes": {
                                        "start": "2012",
                                        "end": "2013"
                                    }
                                },
                                {
                                    "type": "element",
                                    "name": "LastUpdate",
                                    "attributes": {
                                        "value": "2019-02-26T13:25:18"
                                    }
                                },
                                {
                                    "type": "element",
                                    "name": "Dimensions",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "Dimension",
                                            "attributes": {
                                                "value": "s_OKEI",
                                                "agencyID": "1"
                                            },
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "Name",
                                                    "attributes": {
                                                        "xml:lang": "ru"
                                                    },
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Классификатор единиц измерения"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "Dimension",
                                            "attributes": {
                                                "value": "s_OKATO",
                                                "agencyID": "1"
                                            },
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "Name",
                                                    "attributes": {
                                                        "xml:lang": "ru"
                                                    },
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Классификатор объектов административно-территориального деления (ОКАТО)"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "Dimension",
                                            "attributes": {
                                                "value": "s_pervedprog",
                                                "agencyID": "1"
                                            },
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "Name",
                                                    "attributes": {
                                                        "xml:lang": "ru"
                                                    },
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Перечень ведомственных программ"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "Dimension",
                                            "attributes": {
                                                "value": "s_perael",
                                                "agencyID": "1"
                                            },
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "Name",
                                                    "attributes": {
                                                        "xml:lang": "ru"
                                                    },
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Перечень федеральных министерств, служб, агенств и отдельных организаций"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "Dimension",
                                            "attributes": {
                                                "value": "s_perezelind",
                                                "agencyID": "1"
                                            },
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "Name",
                                                    "attributes": {
                                                        "xml:lang": "ru"
                                                    },
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Перечень целевых индикаторов ведомственных программ"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "Methodology",
                                    "attributes": {
                                        "value": "Показатель формируется по федеральным органам государственной власти - субъектам бюджетного планирования по утвержденным в установленном порядке по&nbsp;целевым программам ведомств.Количественное значение индикатора (показателя) целевой программе ведомства на начало отчетного года. Указания приведены на бланке формы."
                                    }
                                },
                                {
                                    "type": "element",
                                    "name": "Organization",
                                    "attributes": {
                                        "value": "Федеральная служба государственной статистики"
                                    }
                                },
                                {
                                    "type": "element",
                                    "name": "Department",
                                    "attributes": {
                                        "value": "Управление статистики торговли и услуг"
                                    }
                                },
                                {
                                    "type": "element",
                                    "name": "Allocations",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "Allocation",
                                            "attributes": {
                                                "id": "1.32.15."
                                            },
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "Name",
                                                    "attributes": {
                                                        "xml:lang": "ru"
                                                    },
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "По федеральному плану статработ / Федеральная служба государственной статистики / Финансы, финансовая деятельность и информационное статистическое обеспечение оценки эффективности бюджетных расходов / Информация о ходе реализации целевых программ ведомств"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "Comment",
                                    "attributes": {
                                        "value": "Сведения о ходе реализации целевой&nbsp; программы ведомства № 1-ПВ"
                                    }
                                },
                                {
                                    "type": "element",
                                    "name": "Responsible",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "Name",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "Новикова Л.А."
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "Contacts",
                                            "attributes": {
                                                "xml:lang": "ru"
                                            },
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "(495) 632-91-16,99592 Novikova_l@gks.ru"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "Forms",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "Form",
                                            "attributes": {
                                                "value": "1-ПВ"
                                            },
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "Name",
                                                    "attributes": {
                                                        "xml:lang": "ru"
                                                    },
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Сведения о ходе реализации целевой программы ведомства"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "element",
                    "name": "DataSet",
                    "elements": [
                        {
                            "type": "element",
                            "name": "generic:Series",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "generic:SeriesKey",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKEI",
                                                "value": "796"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKATO",
                                                "value": "643"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_pervedprog",
                                                "value": "09.082.0011"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perael",
                                                "value": "82"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perezelind",
                                                "value": "0000011.5"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Attributes",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "EI",
                                                "value": "-"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "PERIOD",
                                                "value": "значение показателя за год"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Obs",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Time",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2012"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:ObsValue",
                                            "attributes": {
                                                "value": "296"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "generic:Series",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "generic:SeriesKey",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKEI",
                                                "value": "169"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKATO",
                                                "value": "643"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_pervedprog",
                                                "value": "w1:s_pervedprog:11.082.0000012"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perael",
                                                "value": "82"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perezelind",
                                                "value": "0000012.4"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Attributes",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "EI",
                                                "value": "-"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "PERIOD",
                                                "value": "значение показателя за год"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Obs",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Time",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2012"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:ObsValue",
                                            "attributes": {
                                                "value": "6040,7"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "generic:Series",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "generic:SeriesKey",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKEI",
                                                "value": "536"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKATO",
                                                "value": "643"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_pervedprog",
                                                "value": "w1:s_pervedprog:11.082.0000012"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perael",
                                                "value": "82"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perezelind",
                                                "value": "0000012.5"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Attributes",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "EI",
                                                "value": "-"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "PERIOD",
                                                "value": "значение показателя за год"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Obs",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Time",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2012"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:ObsValue",
                                            "attributes": {
                                                "value": "5740"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "generic:Series",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "generic:SeriesKey",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKEI",
                                                "value": "538"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKATO",
                                                "value": "643"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_pervedprog",
                                                "value": "w1:s_pervedprog:11.082.0000012"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perael",
                                                "value": "82"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perezelind",
                                                "value": "0000012.2"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Attributes",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "EI",
                                                "value": "-"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "PERIOD",
                                                "value": "значение показателя за год"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Obs",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Time",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2012"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:ObsValue",
                                            "attributes": {
                                                "value": "0"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "generic:Series",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "generic:SeriesKey",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKEI",
                                                "value": "538"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKATO",
                                                "value": "643"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_pervedprog",
                                                "value": "w1:s_pervedprog:11.082.0000012"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perael",
                                                "value": "82"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perezelind",
                                                "value": "0000012.3"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Attributes",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "EI",
                                                "value": "-"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "PERIOD",
                                                "value": "значение показателя за год"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Obs",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Time",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2012"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:ObsValue",
                                            "attributes": {
                                                "value": "0"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "generic:Series",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "generic:SeriesKey",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKEI",
                                                "value": "553"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKATO",
                                                "value": "643"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_pervedprog",
                                                "value": "w1:s_pervedprog:11.082.0000012"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perael",
                                                "value": "82"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perezelind",
                                                "value": "0000012.6"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Attributes",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "EI",
                                                "value": "-"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "PERIOD",
                                                "value": "значение показателя за год"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Obs",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Time",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2012"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:ObsValue",
                                            "attributes": {
                                                "value": "50790"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "generic:Series",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "generic:SeriesKey",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKEI",
                                                "value": "642"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKATO",
                                                "value": "643"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_pervedprog",
                                                "value": "09.082.0015"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perael",
                                                "value": "82"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perezelind",
                                                "value": "0000015.1"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Attributes",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "EI",
                                                "value": "-"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "PERIOD",
                                                "value": "значение показателя за год"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Obs",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Time",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2012"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:ObsValue",
                                            "attributes": {
                                                "value": "150"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "generic:Series",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "generic:SeriesKey",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKEI",
                                                "value": "642"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKATO",
                                                "value": "643"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_pervedprog",
                                                "value": "09.082.0015"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perael",
                                                "value": "82"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perezelind",
                                                "value": "0000015.1"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Attributes",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "EI",
                                                "value": "-"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "PERIOD",
                                                "value": "значение показателя за год"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Obs",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Time",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2013"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:ObsValue",
                                            "attributes": {
                                                "value": "150"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "generic:Series",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "generic:SeriesKey",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKEI",
                                                "value": "744"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKATO",
                                                "value": "643"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_pervedprog",
                                                "value": "w1:s_pervedprog:12.056.0000013"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perael",
                                                "value": "56"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perezelind",
                                                "value": "0000013.2"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Attributes",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "EI",
                                                "value": "-"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "PERIOD",
                                                "value": "значение показателя за год"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Obs",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Time",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2012"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:ObsValue",
                                            "attributes": {
                                                "value": "80"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "generic:Series",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "generic:SeriesKey",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKEI",
                                                "value": "744"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKATO",
                                                "value": "643"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_pervedprog",
                                                "value": "w1:s_pervedprog:12.056.0000013"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perael",
                                                "value": "56"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perezelind",
                                                "value": "0000013.2"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Attributes",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "EI",
                                                "value": "-"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "PERIOD",
                                                "value": "значение показателя за год"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Obs",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Time",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2013"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:ObsValue",
                                            "attributes": {
                                                "value": "100"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "generic:Series",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "generic:SeriesKey",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKEI",
                                                "value": "744"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKATO",
                                                "value": "643"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_pervedprog",
                                                "value": "w1:s_pervedprog:11.082.0000012"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perael",
                                                "value": "82"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perezelind",
                                                "value": "0000012.1"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Attributes",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "EI",
                                                "value": "-"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "PERIOD",
                                                "value": "значение показателя за год"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Obs",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Time",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2012"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:ObsValue",
                                            "attributes": {
                                                "value": "35,2"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "generic:Series",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "generic:SeriesKey",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKEI",
                                                "value": "w2:p_okei:172"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKATO",
                                                "value": "643"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_pervedprog",
                                                "value": "w1:s_pervedprog:11.082.0000012"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perael",
                                                "value": "82"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perezelind",
                                                "value": "0000012.7"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Attributes",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "EI",
                                                "value": "-"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "PERIOD",
                                                "value": "значение показателя за год"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Obs",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Time",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2012"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:ObsValue",
                                            "attributes": {
                                                "value": "24,8"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "name": "generic:Series",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "generic:SeriesKey",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKEI",
                                                "value": "172"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_OKATO",
                                                "value": "643"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_pervedprog",
                                                "value": "w1:s_pervedprog:11.082.0000012"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perael",
                                                "value": "82"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "s_perezelind",
                                                "value": "0000012.7"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Attributes",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "EI",
                                                "value": "-"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:Value",
                                            "attributes": {
                                                "concept": "PERIOD",
                                                "value": "значение показателя за год"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "generic:Obs",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "generic:Time",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2012"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "generic:ObsValue",
                                            "attributes": {
                                                "value": "24,8"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}`;
  // "type": "element",
  //                             "name": "structure:CodeList",
  //                             "attributes": {
  //                                 "id": "s_pervedprog"
  //                             },
  //                             "elements": [
  //                                 {
  //                                     "type": "element",
  //                                     "name": "structure:Name",
  //                                     "attributes": {
  //                                         "xml:lang": "ru"
  //                                     },
  //                                     "elements": [
  //                                         {
  //                                             "type": "text",
  //                                             "text": "Перечень ведомственных программ"
  //                                         }
  //                                     ]
  //                                 },
  //                                 {
  //                                     "type": "element",
  //                                     "name": "structure:Code",
  //                                     "attributes": {
  //                                         "value": "w1:s_pervedprog:12.056.0000013"
  //                                     },
  //                                     "elements": [
  //                                         {
  //                                             "type": "element",
  //                                             "name": "structure:Description",
  //                                             "attributes": {
  //                                                 "xml:lang": "ru"
  //                                             },
  //                                             "elements": [
  //                                                 {
  //                                                     "type": "text",
  //                                                     "text": "Медико-биологическое и медико-санитарное обеспечение спортсменов сборных команд Российской Федерации"
  //                                                 }
  //                                             ]
  //                                         }
  //                                     ]
  //                                 },
  const сodeLists = JSON.parse(rawGrid).elements[0].elements.find((element) => element.name === 'CodeLists');
  const listOfSeriesKeys = {};
  for (const codeList of сodeLists.elements) {
    const codeListName = codeList.elements.find((element) => element.name === 'structure:Name').elements[0].text;
    listOfSeriesKeys[codeList.attributes.id] = { name: codeListName, codes: {} };
    const codeListCodes = codeList.elements.filter((element) => element.name === 'structure:Code');
    for (const code of codeListCodes) {
      const codeValue = code.attributes.value;
      const description = code.elements.find((element) => element.name === 'structure:Description').elements[0].text;
      listOfSeriesKeys[codeList.attributes.id].codes[codeValue] = description;
    }
  }
  console.log('сodeLists', listOfSeriesKeys);
  const regionKey = Object.keys(listOfSeriesKeys).find((element) => {
    return ['s_OKATO', '00_003', 'mОКАТО', 'ref_18_rf', '30-ОКАТО', 'FO'].includes(element);
  });
  console.log('regionKey', regionKey);
  if (!regionKey) {
    // continue;
  }
  const statistics = JSON.parse(rawGrid).elements[0].elements.find((element) => element.name === 'DataSet');
  console.log('сodeLists', сodeLists);
  // fs.writeFile('Output2.txt', JSON.stringify(statistics), (err) => {
  //   if (err) throw err;
  // });
  console.log('statistics');
  const statisticArray = [];
  const newRegions = [];
  for (const statistic of statistics.elements) {
    const data = statistic.elements;
    const seriesKeys = data.find((element) => element.name === 'generic:SeriesKey').elements;

    const indicatorName = seriesKeys.reduce((accumulator, currentValue) => {
      const curConcept = currentValue.attributes.concept;
      if (curConcept === regionKey) return accumulator;
      const curValue = currentValue.attributes.value;
      const partName = `${listOfSeriesKeys[curConcept].name}: ${listOfSeriesKeys[curConcept].codes[curValue]}`;
      return `${accumulator}|${partName}`;
    }, 'indicator.title').replace(/\s+/g, ' ');
    console.log('indicatorName', indicatorName);
    // const [newIndicator, newIndicatorCreated] = await Indicator.findOrCreate({
    //   where: {
    //     title: indicatorName,
    //   },
    //   defaults: {
    //     title: indicator.title,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // });
    // for (const category of indicator.categories) {
    //   const [newCategory, newCategoryCreated] = await Category.findOrCreate({
    //     where: {
    //       title: category,
    //     },
    //     defaults: {
    //       title: category,
    //       category_id: mainCategory.id,
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    //     }
    //   });
    //   const [newIndicatorCategory, newIndicatorCategoryCreated] = await Indicators_categories.findOrCreate({
    //     where: {
    //       indicator_id: newIndicator.id,
    //       category_id: newCategory.id
    //     },
    //     defaults: {
    //       indicator_id: newIndicator.id,
    //       category_id: newCategory.id,
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    //     }
    //   });
    // }
    const attributes = data.find((element) => element.name === 'generic:Attributes').elements;
    const observations = data.find((element) => element.name === 'generic:Obs').elements;
    // console.log('seriesKeys', seriesKeys);
    const regionKeyIndex = seriesKeys.findIndex((element) => {
      if (element.attributes && element.attributes.concept) {
        return element.attributes.concept === regionKey;
      }
      return false;
    });
    if (regionKeyIndex === -1) {
      continue;
    }
    const { concept: regionKeyConcept, value: regionKeyValue } = seriesKeys[regionKeyIndex].attributes;
    console.log('regionKeyConcept', regionKeyConcept);
    console.log('regionKeyValue', regionKeyValue);

    // if (`${regionKeyValue}`.length !== 2) continue;

    const extendedOKATO = `${regionKeyValue}${'0'.repeat(`${regionKeyValue}`.length >= 11 ? 0 : 11 - `${regionKeyValue}`.length)}`;
    // const region = await Region.findOne({
    //   where: {
    //     [Op.or]: [
    //       {
    //         reg_alias_okato: {
    //           [Op.or]: [regionKeyValue, extendedOKATO]
    //         }
    //       },
    //       {
    //         reg_kladr_id: regionKeyValue
    //       },
    //     ]
    //   }
    // });
    console.log('extendedOKATO', extendedOKATO);
    // if (!region) {
    //   // if (regionKladrId === '442014') {
    //   //   console.log(placeOfSearch.name, tabType.name, mode, year);
    //   // }
    //   newRegions.push(regionKeyValue);
    //   continue;
    //   // process.exit(0);
    // }

    const measurementUnit = attributes.find((element) => element.attributes.concept === 'EI').attributes.value;

    console.log('measurementUnit', measurementUnit);

    const period = attributes.find((element) => element.attributes.concept === 'PERIOD').attributes.value;

    console.log('period', period);

    const year = observations.find((element) => element.name === 'generic:Time').elements[0].text;

    console.log('year', year);

    const { value } = observations.find((element) => element.name === 'generic:ObsValue').attributes;

    console.log('values', value);

    if (value !== undefined && value !== null) {
      // const [newStatistic, newStatisticCreated] = await Region_statistic.findOrCreate({
      //   where: {
      //     year: `${parseInt(year)}`,
      //     indicator_id: newIndicator.id,
      //     region_id: region.reg_ID,
      //   },
      //   defaults: {
      //     year: `${parseInt(year)}`,
      //     indicator_id: newIndicator.id,
      //     value,
      //     measurement_unit: measurementUnit,
      //     region_id: region.reg_ID,
      //     createdAt: new Date(),
      //     updatedAt: new Date()
      //   }
      // });
      // if (!newStatisticCreated && newStatistic.value !== value) {
      //   console.log('dublicate-count', newStatisticCreated);
      //   console.log(newStatistic.region_id, newStatistic.indicator_id, newStatistic.value, newStatistic.year);
      //   console.log(region.reg_ID, newIndicator.id, value, `${parseInt(year)}`);
      //   // const dublicateOfStatistic = await Region_statistic.create({
      //   //   year: `${parseInt(year)}`,
      //   //   indicator_id: newIndicator.id,
      //   //   value,
      //   //   measurement_unit: measurementUnit,
      //   //   region_id: region.reg_ID,
      //   //   createdAt: new Date(),
      //   //   updatedAt: new Date()
      //   // });
      // }
    }
  }
})();
