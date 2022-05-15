import React from "react";
import "./MenuInfo.module.css";
type Props = {
  title: string;
  text: {};
};
export const MenuInfo = () => {
  return (
    <div>
      <dl>
        <dt>会社名</dt>
        <dd>株式会社〇〇</dd>
        <dt>所在地</dt>
        <dd>〒000-0000 東京都渋谷区</dd>
        <dt>電話番号</dt>
        <dd>03-1122-3456</dd>
        <dt>代表者</dt>
        <dd>名前 太郎</dd>
        <dt>E-Mail</dt>
        <dd>xxx@xxxx.com</dd>
        <dt>お問い合わせ受付時間</dt>
        <dd>平日：10：00～19：00（土・日・祝 定休）</dd>
      </dl>
    </div>
  );
};
