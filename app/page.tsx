"use client";

import { useState } from "react";

// 辞書による抽出
const dictionaries = {
  when: {
    "昨日": "昨日",
    "今日": "今日",
    "今週": "今週",
    "先週": "先週",
  },

  who: {
    "営業部": "営業部",
    "開発部": "開発部",
    "人事部": "人事部",
  },

  where: {
    "東京": "東京",
    "大阪": "大阪",
    "会議室": "会議室",
    "取引先": "取引先"
  },

  what: {
    "会議": "会議",
    "問い合わせ": "問い合わせ対応",
    "トラブル": "トラブル対応",
    "研修": "研修",
  },

  why: {
    "進捗": "進捗確認",
    "顧客": "顧客対応",
    "教育": "教育",
    "改善": "業務改善",
  },

  how: {
    "報告": "報告",
    "メール": "メール連絡",
    "電話": "電話対応",
    "チャット": "チャット対応",
  },
};

function extractValue(
  text: string,
  dictionary: Record<string, string>
) {
  for (const key in dictionary) {
    if (text.includes(key)) {
      return dictionary[key];
    }
  }

  return "";
}

export default function Home() {

  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [result, setResult] = useState({
    when: "",
    who: "",
    where: "",
    what: "",
    why: "",
    how: "",
  });

  async function convertText() {

    setLoading(true);
    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );
  
    const when = extractValue(
      inputText,
      dictionaries.when
    );
    
    const who = extractValue(
      inputText,
      dictionaries.who
    );
    
    const where = extractValue(
      inputText,
      dictionaries.where
    );
    
    const what = extractValue(
      inputText,
      dictionaries.what
    );
    
    const why = extractValue(
      inputText,
      dictionaries.why
    );
    
    const how = extractValue(
      inputText,
      dictionaries.how
    );
    
    // 文章に辞書の単語が含まれていなかった場合
    if (
      !when &&
      !who &&
      !where &&
      !what &&
      !why &&
      !how
    ) {
      alert("抽出できませんでした");
    
      setLoading(false);
    
      return;
    }

    setLoading(false);
  
    setResult({
      when,
      who,
      where,
      what,
      why,
      how,
    });
    setIsConverted(true);
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        ナレッジ登録
      </h1>

      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-full h-40 border rounded p-2 bg-white text-black"
        placeholder="業務内容を入力"
      />

      <div className="mt-4"> 
      {/*確認用表示*/}
        入力内容:
        {inputText}
      </div> 

      <button
         onClick={convertText}
         disabled={loading}
         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "変換中..." : "AIによる自動変換"}
      </button>

      <p className="text-sm text-gray-500">
        ※AIが自動推定した内容です。保存前に確認してください。
      </p>

      {isConverted && (
        <div className="mt-8 space-y-4">

          <div>
            <label>
              When
            </label>
          <select
            value={result.when}
            onChange={(e) =>
              setResult({
                ...result,
                when: e.target.value,
              })
            }
            className="w-full border rounded p-2 bg-white text-black"
          >
            {/*プルダウン形式でも選択可能に　随時タグとして追加も可能*/}
            <option value="">選択してください</option>
            <option value="今日">今日</option>
            <option value="昨日">昨日</option>
            <option value="今週">今週</option>
            <option value="先週">先週</option>
          </select>
          </div>

          <div>
            <label>Who</label>
          <select
            value={result.who}
            onChange={(e) =>
              setResult({
                ...result,
                who: e.target.value,
              })
            }
            className="w-full border rounded p-2 bg-white text-black"
          >
            <option value="">選択してください</option>
            <option value="営業部">営業部</option>
            <option value="開発部">開発部</option>
            <option value="人事部">人事部</option>
          </select>
          </div>

          <div>
            <label>
              Where
            </label>
            <input
              value={result.where}
              onChange={(e) =>
                setResult({
                  ...result,
                  where: e.target.value,
                })
              }
              className="w-full border rounded p-2 bg-white text-black"
            />
          </div>

          <div>
            <label>What</label>
            <input
              value={result.what}
              onChange={(e) =>
                setResult({
                  ...result,
                  what: e.target.value,
                })
              }
              className="w-full border rounded p-2 bg-white text-black"
            />
          </div>

          <div>
            <label>Why</label>
            <input
              value={result.why}
              onChange={(e) =>
                setResult({
                  ...result,
                  why: e.target.value,
                })
              }
              className="w-full border rounded p-2 bg-white text-black"
            />
          </div>

          <div>
            <label>How</label>
            <input
              value={result.how}
              onChange={(e) =>
                setResult({
                  ...result,
                  how: e.target.value,
                })
              }
              className="w-full border rounded p-2 bg-white text-black"
            />
          </div>

        </div>
      )}

    <button
      onClick={() => {
        console.log(result);
        alert("保存しました");

        setInputText("");

        setResult({
          when: "",
          who: "",
          where: "",
          what: "",
          why: "",
          how: "",
        });

        setIsConverted(false);
          
      }}
      className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
    >
      保存
    </button>
    </main>
  );
}
