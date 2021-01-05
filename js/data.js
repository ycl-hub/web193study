//学生端
//id 编号   ，number学号  ， name姓名  ，sex性别 ， tel 手机号，qq号，college 学院，classes 班级，major课程，url 学生本人照片
//专业技能 skill,表达能力expression,学习能力learning,思考力logic,执行力implement, 领导力leader, 纪律discipline,集中力focus 
//老师端
//专业课老师评价professional，职业课老师评价vocational  学习情况 九月sept score评分  comment评价例如良好 后面还有十月十一月十二月一月 以此类推
// week 每周得分
let students = [{
        "id": 38,
        "number": "1936212162",
        "name": "余成林",
        "sex": "男",
        "tel": "17630902513",
        "qq": "823727840",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 3,
            "expression": 2,
            "learning": 2,
            "logic": 2,
            "implement": 4,
            "leader": 3,
            "discipline": 5,
            "focus": 3
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": "良好"
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/余成林.jpg"
    },
    {
        "id": 16,
        "number": "1936212075",
        "name": "刘鑫",
        "sex": "男",
        "tel": "15224703679",
        "qq": "2877219826",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/刘鑫.jpg"

    },
    {
        "id": 22,
        "number": "1936212115",
        "name": "王晨兴",
        "sex": "男",
        "tel": "18739587596",
        "qq": "2371299615",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/王晨兴.jpg"
    },
    {
        "id": 34,
        "number": "1936212150",
        "name": "许恒",
        "sex": "男",
        "tel": "17339685276",
        "qq": "1227739916",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "0",
        "vocational": "0",
        "study": {
            "sept": {
                "score": 3,
                "comment": "良好"
            },
            "oct": {
                "score": 3,
                "comment": "良好"
            },
            "nov": {
                "score": 3,
                "comment": "良好"
            },
            "dec": {
                "score": 3,
                "comment": "良好"
            },
            "jan": {
                "score": 3,
                "comment": "良好"
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/许恒.jpg"
    },
    {
        "id": 47,
        "number": "1936212182",
        "name": "赵君生",
        "sex": "男",
        "tel": "17326274051",
        "qq": "2108683753",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 2,
            "learning": 2,
            "logic": 2,
            "implement": 4,
            "leader": 4,
            "discipline": 5,
            "focus": 3
        },
        "professional": "挺好的",
        "vocational": "不咋滴",
        "study": {
            "sept": {
                "score": 3,
                "comment": "良好"
            },
            "oct": {
                "score": 3,
                "comment": "良好"
            },
            "nov": {
                "score": 3,
                "comment": "良好"
            },
            "dec": {
                "score": 3,
                "comment": "良好"
            },
            "jan": {
                "score": 3,
                "comment": "良好"
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/赵君生.jpg"
    },
    {
        "id": 17,
        "number": "1936212078",
        "name": "刘一城",
        "sex": "男",
        "tel": "15890028727",
        "qq": "774673793",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/刘一城.jpg"
    },
    {
        "id": 10,
        "number": "1936212046",
        "name": "姜帅杰",
        "sex": "男",
        "tel": "15838085038",
        "qq": "2500922301",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/姜帅杰.jpg"
    },
    {
        "id": 3,
        "number": "1936212014",
        "name": "范恒科",
        "sex": "男",
        "tel": "17539409432",
        "qq": "2028272099",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/范恒科.jpg"
    },
    {
        "id": 29,
        "number": "1936212136",
        "name": "魏德飞",
        "sex": "男",
        "tel": "17630761415",
        "qq": "2461106728",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/魏德飞.jpg"
    },
    {
        "id": 19,
        "number": "1936212103",
        "name": "孙一博",
        "sex": "男",
        "tel": "18739768128",
        "qq": "1650374396",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/孙一博.jpg"
    },
    {
        "id": 45,
        "number": "1936212176",
        "name": "张雨",
        "sex": "男",
        "tel": "17838749537",
        "qq": "2556659744",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/张雨.jpg"
    },
    {
        "id": 14,
        "number": "1936212062",
        "name": "李阳",
        "sex": "男",
        "tel": "15637612139",
        "qq": "1471353334",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/李阳.jpg"
    },
    {
        "id": 33,
        "number": "1936212149",
        "name": "许灏泷",
        "sex": "男",
        "tel": "18537257018",
        "qq": "1308283679",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/许灏泷.jpg"
    },
    {
        "id": 1,
        "number": "1936212005",
        "name": "陈豆豆",
        "sex": "男",
        "tel": "18639015014",
        "qq": "1943158126",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/陈豆豆.jpg"
    },
    {
        "id": 30,
        "number": "1936212141",
        "name": "吴宗耀",
        "sex": "男",
        "tel": "17838742175",
        "qq": "1171852956",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/吴宗耀.jpg"
    },
    {
        "id": 41,
        "number": "1936212168",
        "name": "张浩宇",
        "sex": "男",
        "tel": "15978582792",
        "qq": "1695824267",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/张浩宇.jpg"
    },
    {
        "id": 49,
        "number": "1936212196",
        "name": "朱科科",
        "sex": "男",
        "tel": "17369653541",
        "qq": "2539151353",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/朱科科.jpg"
    },
    {
        "id": 13,
        "number": "1936212059",
        "name": "李小威",
        "sex": "男",
        "tel": "17695744924",
        "qq": "1735884871",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/李小威.jpg"
    },
    {
        "id": 9,
        "number": "1936212045",
        "name": "黄雨秋",
        "sex": "女",
        "tel": "18530691368",
        "qq": "1716205253",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/黄雨秋.jpg"
    },
    {
        "id": 50,
        "number": "1936212198",
        "name": "朱遇贵",
        "sex": "男",
        "tel": "15737705101",
        "qq": "2994536145",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/朱遇贵.jpg"
    },
    {
        "id": 31,
        "number": "1936212142",
        "name": "武书周",
        "sex": "男",
        "tel": "17513102759",
        "qq": "2631086376",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/武书周.jpg"
    },
    {
        "id": 27,
        "number": "1936212129",
        "name": "王潇",
        "sex": "男",
        "tel": "15939510455",
        "qq": "1564231865",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/王潇.jpg"
    },
    {
        "id": 36,
        "number": "1936212154",
        "name": "薛留阳",
        "sex": "男",
        "tel": "17629886605",
        "qq": "207195095",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/薛留阳.jpg"
    },
    {
        "id": 37,
        "number": "1936212156",
        "name": "闫新世",
        "sex": "男",
        "tel": "18790556354",
        "qq": "2234504683",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/闫新世.jpg"
    },
    {
        "id": 43,
        "number": "1936212171",
        "name": "张文强",
        "sex": "男",
        "tel": "17530348217",
        "qq": "3501904313",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/张文强.jpg"
    },
    {
        "id": 24,
        "number": "1936212122",
        "name": "王路好",
        "sex": "男",
        "tel": "13461013253",
        "qq": "1162057223",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/王路好.jpg"
    },
    {
        "id": "21",
        "number": "1936212109",
        "name": "田昊东",
        "sex": "男",
        "tel": "13137760387",
        "qq": "2284330123",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/田昊东.jpg"
    },
    {
        "id": 11,
        "number": "1936212048",
        "name": "稂鹏宇",
        "sex": "男",
        "tel": "18437625003",
        "qq": "2310660594",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/稂鹏宇.jpg"
    },
    {
        "id": 8,
        "number": "1936212038",
        "name": "胡若琪",
        "sex": "女",
        "tel": "18637867869",
        "qq": "2292512567",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/胡若琪.jpg"
    },
    {
        "id": 48,
        "number": "1936212194",
        "name": "朱洪源",
        "sex": "男",
        "tel": "17739730624",
        "qq": "1422322996",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/朱洪源.jpg"
    },
    {
        "id": 39,
        "number": "1936212199",
        "name": "袁泽宁",
        "sex": "男",
        "tel": "16692109374",
        "qq": "1366914441",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/袁泽宁.jpg"
    },
    {
        "id": 51,
        "number": "1936212199",
        "name": "邹绵超",
        "sex": "男",
        "tel": "17633725127",
        "qq": "2558539718",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/邹绵超.jpg"
    },
    {
        "id": 2,
        "number": "1936212008",
        "name": "陈梦佳",
        "sex": "女",
        "tel": "15290104691",
        "qq": "1072169770",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "朱老师非常负责任，很有耐心，照顾到每一位同学，而且会把代码和生活结合起来详细地向我们讲解不懂的问题，让问题变的通俗易懂，老师不仅教我们学习上的知识还教我们做人，所以专业课让我很受益！",
        "vocational": "白老师很会带动氛围，同学们和老师积极互动，老师讲课方式挺新颖,我挺喜欢的，职素课整体都不错",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/陈梦佳.jpg"
    },
    {
        "id": 20,
        "number": "1936212107",
        "name": "唐向阳",
        "sex": "男",
        "tel": "16639040551",
        "qq": "1838363118",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/唐向阳.jpg"
    },
    {
        "id": 13,
        "number": "1936212056",
        "name": "李齐坤",
        "sex": "男",
        "tel": "15138374808",
        "qq": "1545793714",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/李齐坤.jpg"
    },
    {
        "id": 25,
        "number": "1936212124",
        "name": "王赛男",
        "sex": "女",
        "tel": "19949135503",
        "qq": "2572536881",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/王赛男.jpg"
    },
    {
        "id": 7,
        "number": "1936212037",
        "name": "胡庆威",
        "sex": "男",
        "tel": "19544520501",
        "qq": "863751281",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/胡庆威.jpg"
    },
    {
        "id": 35,
        "number": "1936212152",
        "name": "许伟建",
        "sex": "男",
        "tel": "18739726961",
        "qq": "2538112626",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/许伟建.jpg"
    },
    {
        "id": 15,
        "number": "1936212069",
        "name": "刘加康",
        "sex": "男",
        "tel": "13193773579",
        "qq": "398953724",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/刘加康.jpg"
    },
    {
        "id": 18,
        "number": "1936212086",
        "name": "秦闻泽",
        "sex": "男",
        "tel": "13343823642",
        "qq": "264504814",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/秦闻泽.jpg"
    },
    {
        "id": 9,
        "number": "1936212021",
        "name": "葛瑞璐",
        "sex": "女",
        "tel": "15320856576",
        "qq": "781687145",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/葛瑞璐.jpg"
    },
    {
        "id": 5,
        "number": "1936212020",
        "name": "高一丁",
        "sex": "男",
        "tel": "15544420271",
        "qq": "840752741",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/高一丁.jpg"
    },
    {
        "id": 42,
        "number": "1936212169",
        "name": "张磊",
        "sex": "男",
        "tel": "18603869925",
        "qq": "1487430104",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/张磊.jpg"
    },
    {
        "id": 40,
        "number": "1936212166",
        "name": "张高峰",
        "sex": "男",
        "tel": "17739751941",
        "qq": "1632853514",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/张高峰.jpg"
    },
    {
        "id": 32,
        "number": "1936212143",
        "name": "武子煜",
        "sex": "男",
        "tel": "19803931566",
        "qq": "1539822770",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/武子煜.jpg"
    },
    {
        "id": 26,
        "number": "1936212126",
        "name": "王世隆",
        "sex": "男",
        "tel": "15036330818",
        "qq": "1220108862",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 5,
            "expression": 2.5,
            "learning": 4.6,
            "logic": 4,
            "implement": 3,
            "leader": 2,
            "discipline": 2,
            "focus": 3
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/王世隆.jpg"
    },
    {
        "id": 4,
        "number": "1936212019",
        "name": "高武杰",
        "sex": "男",
        "tel": "17538590302",
        "qq": "363377482",
        "college": "信息工程学院",
        "classes": "软件193",
        "major": "web前端开发",
        "ability": {
            "skill": 2,
            "expression": 3,
            "learning": 2,
            "logic": 4,
            "implement": 1,
            "leader": 4,
            "discipline": 0,
            "focus": 0
        },
        "professional": "",
        "vocational": "",
        "study": {
            "sept": {
                "score": 3,
                "comment": ""
            },
            "oct": {
                "score": 3,
                "comment": ""
            },
            "nov": {
                "score": 3,
                "comment": ""
            },
            "dec": {
                "score": 3,
                "comment": ""
            },
            "jan": {
                "score": 3,
                "comment": ""
            }
        },
        "week": [
            1, 1, 1, 1, 1, 1, 1, 1
        ],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/高武杰.jpg"
    },
    {
        id: 23,
        number: '1936212121',
        name: '王凯威',
        sex: '男',
        tel: '17634362308',
        qq: '2557567211',
        college: '信息工程学院',
        classes: '软件193',
        major: 'web前端开发',
        ability: {
            skill: 0,
            expression: 0,
            learning: 0,
            logic: 0,
            implement: 0,
            leader: 0,
            discipline: 0,
            focus: 0
        },
        professional: '',
        vocational: '',
        study: {
            sept: {
                score: 0,
                comment: ''
            },
            oct: {
                score: 0,
                comment: ''
            },
            nov: {
                score: 0,
                comment: ''
            },
            dec: {
                score: 0,
                comment: ''
            },
            jan: {
                score: 0,
                comment: ''
            }
        },
        week: [1, 1, 1, 1, 1, 1, 1, 1],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/王凯威.jpg"

    },
    {
        id: 46,
        number: '1936212181',
        name: '赵东旭',
        sex: '男',
        tel: '19949135657',
        qq: '2432687689',
        college: '信息工程学院',
        classes: '软件193',
        major: 'web前端开发',
        ability: {
            skill: 0,
            expression: 0,
            learning: 0,
            logic: 0,
            implement: 0,
            leader: 0,
            discipline: 0,
            focus: 0
        },
        professional: '很好',
        vocational: '很好',
        study: {
            sept: {
                score: 0,


                comment: ''
            },
            oct: {
                score: 0,
                comment: ''
            },
            nov: {
                score: 0,
                comment: ''
            },
            dec: {
                score: 0,
                comment: ''
            },
            jan: {
                score: 0,
                comment: ''
            }
        },
        week: [1, 1, 1, 1, 1, 1, 1, 1],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/赵东旭.jpg"
    },
    {
        id: 44,
        number: '1936212173',
        name: '张晓航',
        sex: '男',
        tel: '15839745903',
        qq: '3182395451',
        college: '信息工程学院',
        classes: '软件193',
        major: 'web前端开发',
        ability: {
            skill: 0,
            expression: 0,
            learning: 0,
            logic: 0,
            implement: 0,
            leader: 0,
            discipline: 0,
            focus: 0
        },
        professional: '很好',
        vocational: '很好',
        study: {
            sept: {
                score: 0,

                comment: ''
            },
            oct: {
                score: 0,
                comment: ''
            },
            nov: {
                score: 0,
                comment: ''
            },
            dec: {
                score: 0,
                comment: ''
            },
            jan: {
                score: 0,
                comment: ''
            }
        },
        week: [1, 1, 1, 1, 1, 1, 1, 1],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/张晓航.jpg"
    },
    {
        id: 28,
        number: '1936212173',
        name: '王阳阳',
        sex: '男',
        tel: '17639389450',
        qq: '2804045342',
        college: '信息工程学院',
        classes: '软件193',
        major: 'web前端开发',
        ability: {
            skill: 0,
            expression: 0,
            learning: 0,
            logic: 0,
            implement: 0,
            leader: 0,
            discipline: 0,
            focus: 0
        },
        professional: '很好',
        vocational: '很好',
        study: {
            sept: {
                score: 0,
                comment: ''
            },
            oct: {
                score: 0,
                comment: ''
            },
            nov: {
                score: 0,
                comment: ''
            },
            dec: {
                score: 0,
                comment: ''
            },
            jan: {
                score: 0,
                comment: ''
            }
        },
        week: [1, 1, 1, 1, 1, 1, 1, 1],
        "imgUrl": "http://v3f6148422.qicp.vip/img/web193/王阳阳.jpg"
    }
]

let abilityAxis = ['skill', 'learning', 'expression', 'logic', 'implement', 'leader', 'discipline', 'focus']

let monthAxis = ['sept', 'oct', 'nov', 'dec']
let weekAxis = ['一', '二', '三', '四', '五', '六', '七', '八']
module.exports = students