//创建数据库
var db = openDatabase('MyData', '1.0', 'liuyanban', 5 * 1024 * 1024);

//创建数据表
db.transaction(function(tx) {
    tx.executeSql('create table if not exists message (id integer primary key asc,content text,created_time text)');
})

//显示留言
loadContent();

//获取表单
var msgContent = document.getElementById('note-form');

//获取表单内容
var contentText = msgContent.elements['note-content'];

//在本地存储表单内容
contentText.addEventListener('keyup', function() {
    localStorage.setItem('content', contentText.value);
})
contentText.value = localStorage.getItem('content');

//提交留言
function submitContent(ev) {
    ev.preventDefault();
    //得到留言内容
    var contentText = msgContent.elements['note-content'].value;
    //得到提交按钮的值
    var status = msgContent.elements['submit-btn'].value;
    //得到隐藏文本框note-id的值
    var msgId = msgContent.elements['note-id'].value;

    if (status === 'submit') {
        //插入
        db.transaction(function(tx) {
            tx.executeSql("insert into message (content,created_time) values (?,DATETIME('now','localtime'))", [contentText], onSuccess, onError);
        })
    } else {
        //更新
        db.transaction(function(tx) {
            tx.executeSql('update message set content = ? where id = ?', [contentText, msgId], onSuccess, onError);
        })
    }
}

//获得提交按钮并监听它的单击事件
var submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', submitContent);

//执行SQL成功
function onSuccess(tx, rs) {
    console.log('成功');
    loadContent();
}

//执行SQL失败
function onError(tx, rs) {
    console.log("失败" + rs.message);
}

//删除留言
function deleteContent(id) {
    db.transaction(function(tx) {
        tx.executeSql('delete from message where id = ?', [id], onSuccess, onError);
    })
}

//编辑留言
function editContent(id) {
    db.transaction(function(tx) {
        tx.executeSql('select * from message where id = ?', [id], function(tx, rs) {
            //console.log(rs.rows[0]);
            msgContent.elements['note-content'].value = rs.rows[0].content;
            msgContent.elements['submit-btn'].value = 'update';
            msgContent.elements['submit-btn'].innerHTML = '更新';
            msgContent.elements['note-id'].value = id;
        });
    });
}

//显示数据表里的内容
function displayContent(tx, rs) {
    //获取到显示留言列表窗口并清空原有内容
    var contentContainer = document.getElementById('note-list');
    contentContainer.innerHTML = '';

    //循环输出留言
    for (var i = 0; i < rs.rows.length; i++) {
        var contentEntry = rs.rows.item(i);
        contentContainer.innerHTML += `
        <li class="list-group-item">
        ${contentEntry.content}
        <div class="btn-group btn-group-xs pull-right">
            <button class="btn btn-default" onclick="deleteContent(${contentEntry.id})">删除</button>
            <button class="btn btn-default" onclick="editContent(${contentEntry.id})">编辑</button>
            <small class="pull-right note-date">
            ${contentEntry.created_time}
            </small>
        </div>
        
        </li>
        `;
    }
}

//查询留言表
function loadContent() {
    db.transaction(function(tx) {
        tx.executeSql('select * from message order by id desc', [], displayContent, onError);
    })
}