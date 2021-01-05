var express = require('express')
var fs = require('fs')
    //因为需要解析文件路径 因此需要path模块
var multer = require('multer') //中间件解析 post文件类型 可以解析文件和图片
var mysql = require('mysql')
var path = require('path')
    //path.resolve他可以自动识别第一个参数和第二个参数之间的关系，从而合并成一个真实完整的绝对路径
    //创建路由对象
var data = require('../js/data')
const { json, urlencoded } = require('body-parser') //解析post参数
var querystring = require("querystring");
const { constants } = require('buffer')
var router = express.Router();
//配置数据库信息 连接数据库
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'web193'
})
connection.connect(function(err) {
        if (err) {
            console.log('数据库连接失败', err)
        } else {
            console.log('Mysql web193数据库连接成功！！！');
        }
    })
    // 插入学生信息至数据库
    // for  (var  i  =  0;  i  <  data.length;  i++)  {    
    //     var  sql  =  `insert into stuinfo values(${data[i].id},'${data[i].number}','${data[i].name}',
    //                 '${data[i].sex}','${data[i].tel}','${data[i].qq}','${data[i].college}','${data[i].classes}',
    //                 '${data[i].major}',${data[i].ability.skill},${data[i].ability.expression},${data[i].ability.learning},
    //                 ${data[i].ability.logic},${data[i].ability.implement},${data[i].ability.leader},${data[i].ability.discipline},
    //                 ${data[i].ability.focus},'${data[i].imgUrl}')`  
    //     connection.query(sql, (err, data) => {
    //         if (err) {
    //             console.log(err)
    //         } else {
    //             console.log(err)
    //         }
    //     })
    // }
    //老师表
    // for (var i = 0; i < data.length; i++) {
    //     connection.query(`insert into teacherinfo values(${data[i].id},'${data[i].professional}',
    //             '${data[i].vocational}',${data[i].study.sept.score},'${data[i].study.sept.comment}',
    //             ${data[i].study.oct.score},'${data[i].study.oct.comment}',${data[i].study.nov.score},'${data[i].study.nov.comment}'
    //             ,${data[i].study.dec.score},'${data[i].study.dec.comment}',${data[i].study.jan.score},'${data[i].study.jan.comment}')`, (err, data) => {
    //         console.log(err)
    //     })
    // }
    //学生考勤积分表
    // for (var i = 0; i < data.length; i++) {
    //     connection.query(`insert into total values('${data[i].name}',0,0)`, (err, data) => {
    //         console.log(err)
    //     })
    // }
    //期末成绩表
    // for (var i = 0; i < data.length; i++) {
    //     var sql = `insert into gross values(${data[i].id},${data[i].number},'${data[i].name}',0,0,0,0)`
    //     connection.query(sql, (err, data) => {
    //         console.log(err)
    //     })
    // }

//解析post请求参数成对对象
router.use(json())
router.use(urlencoded({ extended: false }))
    //话题页面
router.get('/show', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/show.html'))
    })
    //话题页面
router.get('/topic', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/topic.html'))
    })
    //添加话题页面
router.get('/newtopic', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/newtopic.html'))
    })
    //个人中心
router.get('/personal', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/personal.html'))
    })
    //话题详情界面
    //个人中心
router.get('/detail', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/detail.html'))
    })
    //成绩页面
router.get('/score', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/score.html'))
    })
    //课程表
router.get('/class', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/class.html'))
    })
    //雷达图
router.get('/echart', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/echart.html'))
    })
    //登录界面
router.get('/login', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/login.html'))
    })
    //首页
router.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/index.html'))
    })
    //学生个人信息界面
router.get('/stu', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/stu.html'))
    })
    //考勤页面
router.get('/time', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/timecard.html'))
    })
    //后台页面
router.get('/tea', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/tea.html'))
    })
    //测试页面
router.get('/test', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/test.html'))
    })
    //学生费用缴纳页面
router.get('/wallet', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/wallet.html'))
    })
    //验证学生登录
router.post('/stuLogin', (req, res) => {
        console.log(req.body);
        if (req.body.uname == '' || req.body.upwd == '') {
            res.send('no')
        } else {
            var sql = `select * from stuinfo where name='${req.body.uname}' and number='${req.body.upwd}'`
            connection.query(sql, (err, data) => {
                console.log(err)
                    // 查询数据库 如果账号密码正确就返回会一个数组
                console.log(data)
                if (data != '') {
                    console.log(data)
                    res.send('yes')
                } else {
                    res.send('no')
                }
            })
        }
    })
    //验证教师登录
router.post('/adminLogin', (req, res) => {
        console.log(req.body);
        console.log(req.body);
        if (req.body.uname == '' || req.body.upwd == '') {
            res.send('no')
        } else {
            var sql = `select * from admin where uname='${req.body.uname}' and upwd=${req.body.upwd}`
            connection.query(sql, (err, data) => {
                // console.log(err)
                //查询数据库 如果账号密码正确就返回会一个数组
                // console.log(data)
                if (data != '') {
                    res.send('yes')
                } else {
                    res.send('no')
                }
                // console.log(result)
            })
        }


    })
    //添加管理员账号
router.post('/insertadmin', (req, res) => {
        console.log(req.body)
        var sql = `insert into admin values('${req.body.uname}',${req.body.upwd})`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.send('yes')
            }
        })
    })
    //获取单个学生的信息 移动端页面
router.post('/queryStu', (req, res) => {
        console.log(req.body)
        var str = []
        var sql = `select * from stuinfo where name='${req.body.name}'`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else if (data) {
                str.push(data)
                var sql1 = `select * from teacherinfo where id=${str[0][0].id}`
                connection.query(sql1, (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        str.push(data)
                        console.log(str)
                        res.send(str)
                    }
                })
            }
        })
    })
    //学生课堂成绩表
router.get('/gross', (req, res) => {
        var sql = `select * from gross`
        connection.query(sql, (err, data) => {
            data = { 'code': 0, msg: '', 'count': data.length, 'data': data }
                // console.log(data)
            res.send(data)
        })
    })
    // 前台193学生数据表接口
router.get('/insertStu1', (req, res) => {
    connection.query(`select * from stuinfo`, (err, data) => {
        // var data = JSON.stringify(data)
        data = { "code": 0, "msg": "", "count": data.length, 'data': data }
        res.send(data)
    })
})
router.get('/insertStu2', (req, res) => {
        connection.query(`select * from stuinfo1`, (err, data) => {
            // var data = JSON.stringify(data)
            data = { "code": 0, "msg": "", "count": data.length, 'data': data }
            res.send(data)
        })
    })
    //前台学生成绩表接口
router.get('/searchData', (req, res) => {
        connection.query(`select * from teacherinfo`, (err, data) => {
            // var data = JSON.stringify(data)
            data = { "code": 0, "msg": "", "count": data.length, 'data': data }
            res.send(data)
        })
    })
    //查询学生个人信息
router.post('/stuPerson', (req, res) => {
    var sql = `select * from stuinfo where name='${req.body.name}'`
    var str = []
    connection.query(sql, (err, data) => {
        // @ts-ignore
        if (err == []) {
            res.send('null')
        } else {
            str.push(data[0])
            console.log(data[0])
            console.log(str)
            if (data[0] == undefined) {
                res.send('null')
            } else {
                var sql1 = `select * from teacherinfo where id=${data[0].id}`
                connection.query(sql1, (err, data) => {
                    if (err) {} else {
                        str.push(data[0])
                            // console.log(str)
                        res.send(str)
                    }
                })
            }

        }
    })
})

//添加学生信息 
// 中间件 解析文件 使上传的图片到指定位置 并且修改指定的名称
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'img/web193')
            //上传的目录位置
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '.jpg')
            //上传的文件名 upload.single中的值要和前台input name属性一样
    }
})

//添加学生信息
var upload = multer({ storage: storage })
router.post('/addStu', upload.single('people'), (req, res) => {　
        fs.rename('./img/web193/people.jpg', `./img/web193/${req.body.name}.jpg`, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log('修改图片名称成功')
            }
        })
        console.log(req.body)
        var url = `http://v3f6148422.qicp.vip//img/web193/${req.body.name}.jpg`
        var sql0 = `insert into teacherinfo (id) value(${req.body.id})`
        var sql = `insert into stuinfo (id,number,name,sex,tel,qq,college,class,major,imgUrl) value(${req.body.id},'${ req.body.number}',
        '${req.body.name}','${req.body.sex}','${req.body.tel}','${req.body.qq}','${req.body.college}',
        '${req.body.class}','${req.body.major}','${url}')`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else if (data) {
                connection.query(sql0, (err, data) => {
                    if (err) {
                        console.log(err)
                    }
                })
                console.log('添加成功')
                    // res.sendFile(path.resolve(__dirname, '../view/tea.html'))
            }
        })
    })
    //删除学生信息
router.post('/del', (req, res) => {
        console.log(req.body)
        var sql = `delete from stuinfo where id=${req.body.sid}`
        var sql1 = `delete from teacherinfo where id=${req.body.sid}`
        var name = req.body.sname
        connection.query(sql, (err, data) => {
            if (err) {
                // console.log(err)
                res.send('no')
            } else if (data) {
                fs.unlink('./img/web193/' + name + '.jpg', function(err) {
                    if (err) {
                        throw err;
                    }
                    console.log('照片:' + name + '删除成功！');
                })
                connection.query(sql1, (err, data) => {
                    console.log(err)
                })
                if (data != '') {
                    res.send("yes")
                    console.log('删除成功')
                }
            }
        })
    })
    //删除学生成绩信息
router.post('/teadel', (req, res) => {
        var sql = `update from teacherinfo set id=${req.body.sid},profess='',vocat='',septscore=''
        ,septconmment='',octscore='', octconmment='', novscore='',novconmment='',decscore='',decconmment=''
        ,janscore='',janconmment='' where id=${req.body.sid}`
        connection.query(sql, (err, data) => {
            if (err) {
                res.send('no')
            } else {
                res.send('yes')
            }
        })
    })
    //修改学生课堂成绩
router.post('/updategross', (req, res) => {
        console.log(req.body)
        var sql = `update gross set id=${req.body.id},number=${req.body.number},name='${req.body.name}',star=${req.body.star},
        angular=${req.body.angular},node=${req.body.node},bootstrap=${req.body.bootstrap} where id=${req.body.id}`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
                res.send('yes')
            }
        })
    })
    //查找学生期末总成绩
router.get('/point', (req, res) => {
        console.log(req.query)
        var sql = `select sum((star/1000*60)+(angular+node+bootstrap)/300*40) as point from gross group by name`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.send(data)
            }
        })
    })
    //修改学生基本信息
router.post('/updateBase', (req, res) => {
    // console.log(req.body)
    var sql = `update stuinfo set id=${req.body.sid},number='${req.body.number}',
    name='${req.body.name}',sex='${req.body.sex}',tel='${req.body.tel}',
    qq='${req.body.qq}',college='${req.body.college}',class='${req.body.class}',
    major='${req.body.major}' where id=${req.body.sid}`
    connection.query(sql, (err, data) => {
        if (err) {
            res.send('no')
            console.log(err)
        } else if (data) {
            if (data.affectedRows > 0) {
                res.send("删除成功")
                console.log('修改学生信息成功')
            }
        }
    })
})
router.post('/updateSyn', (req, res) => {
        var sql = `update stuinfo set skill=${req.body.skill},expression=${req.body.expression},learning=${req.body.learning},logic=${req.body.logic},
        implement=${req.body.implement},leader=${req.body.leader},discripline=${req.body.discripline},focus=${req.body.focus}`
        connection.query(sql, (err, data) => {
            if (err) {
                res.send('no')
                console.log(err)
            } else {
                res.send('yes')
            }
        })
    })
    //修改职业课教师评价
router.post('/changeProfess', (req, res) => {
        var sql = `update teacherinfo set profess='${req.body.txt}' where id=${req.body.id}`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.send('yes')
            }
        })
    })
    //修改职素课评价
router.post('/changeVocat', (req, res) => {
        var sql = `update teacherinfo set vocat='${req.body.txt}' where id=${req.body.id}`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
                res.send('yes')
            }
        })
    })
    //修改成绩表
router.post('/updatescore', (req, res) => {
        var sql = `update teacherinfo set id=${req.body.sid},profess='${req.body.profess}',vocat='${req.body.vocat}',
septscore=${req.body.septscore},septconmment='${req.body.septconmment}',octscore=${req.body.octscore},octconmment='${req.body.octconmment}',
novscore=${req.body.novscore},novconmment='${req.body.novconmment}',decscore=${req.body.decscore},decconmment='${req.body.decconmment}',
janscore=${req.body.janscore},janconmment='${req.body.janconmment}' where id=${req.body.sid}`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log('修改成功')
            }
        })
    })
    //查询考勤打卡时间是否过了一天，避免重复打卡
router.post('/redo', (req, res) => {
        // console.log(req.body)
        var sql = `select * from total where uname='${req.body.name}'`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else if (data) {
                // console.log(data[0].today)
                res.send([data[0].today])
            }
        })
    })
    //修改当前考勤打卡时间
router.post('/today', (req, res) => {
        var sql = `update total set today=${req.body.today} where uname='${req.body.name}'`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.send('yes')
            }
        })
    })
    //获取当前考勤积分
router.post('/curren', (req, res) => {
        var sql = `select * from total where uname='${req.body.name}'`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
                res.send([data[0].num])
            }
        })
    })
    //考勤打卡
router.post('/timecard', (req, res) => {
        console.log(req.body)
        var num = ''
        var sql0 = `select * from total where uname='${req.body.name}'`
        connection.query(sql0, (err, data) => {
            if (err) {
                // console.log(err)
                res.send('no')
            } else if (data) {
                console.log(data[0].num)
                num = data[0].num + 1
                console.log(num)
                var sql = `update total set num=${num} where uname='${req.body.name}'`
                connection.query(sql, (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.send([num])
                    }
                })
            }
        })

    })
    //查询score平时成绩 按照降序排列
router.get('/selectScore', (req, res) => {
        var sql = `SELECT * FROM gross ORDER BY star DESC`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
                res.send(data)
            }
        })
    })
    //查询期末总成绩
router.get('/selectPoint', (req, res) => {
        var sql = `select sum((star/1000*60)+(angular+node+bootstrap)/300*40) as point from gross group by name`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.send(data)
            }
        })
    })
    //查询score平时成绩 按照升序排列
router.get('/selectScoreAng', (req, res) => {
        var sql = `SELECT * FROM gross ORDER BY angular desc`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                // console.log(data)
                res.send(data)
            }
        })
    })
    //插入话题
router.post('/insertTopic', (req, res) => {
        var sql = `insert into topic value('${req.body.name}','${req.body.title}','${req.body.time}','${req.body.text}')`
        connection.query(sql, (err, data) => {
            if (err) {
                res.send('no')
            } else {
                res.send('yes')
            }
        })
    })
    //查询话题
router.post('/selectTopic', (req, res) => {
        var sql = `select * from topic where ${req.body.name}`
    })
    //获取话题
router.get('/getTopic', (req, res) => {
        var sql = `select * from topic`
        connection.query(sql, (err, data) => {
            if (err) {
                res.send('no')
            } else {
                res.send(data)
            }
        })
    })
    //添加话题
router.post('/addTopic', (req, res) => {
        console.log(req.body)
        var sql = `insert into topic value('${req.body.name}','${req.body.title}','${req.body.time}','${req.body.tape}')`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
                res.send('no')
            } else {
                res.send('yes')
            }
        })
    })
    //获取单个话题及里面的内容
router.post('/queryTopic', (req, res) => {
        console.log(req.body)
        var sql = `select * from topic where time='${req.body.time}'`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.send(data)
                console.log(data)
            }
        })
    })
    //添加话题里面的评论
router.post('/addComment', (req, res) => {
        console.log(req.body)
        var sql = `insert into comment value('${req.body.stime}','${req.body.name}','${req.body.time}','${req.body.text}')`
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err)
                res.send('no')
            } else {
                res.send('yes')
            }
        })
    })
    //获取话题里面的讨论
router.post('/getComment', (req, res) => {
    console.log(req.body)
    var sql = `select * from comment where stime='${req.body.time}'`
    connection.query(sql, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
            res.send(data)
        }
    })
})

module.exports = router;