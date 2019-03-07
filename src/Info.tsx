import React from "react";
export const Info = () => (
  <>
    <p>
      All results are logged into{" "}
      <a
        href="https://docs.google.com/spreadsheets/d/1ywCxG8xTKOYK89AEZIqgpTvbvpbrb1s4H_bMVvKV59I/edit#gid=0"
        title="Google Sheets"
        target="_blank"
      >
        Google Sheets
      </a>
      .
    </p>
    <small className="from-text text-muted">
      Get Commit Count button privdes the same effect as the following git
      command:
    </small>
    <div className="card">
      <div className="card-body">
        <pre>
          <small>
            <code>
              $ git clone https://github.com/NaohiroTamura/faasshell
              <br />
              $ cd faasshell
              <br />$ git log --since=2018-06-21T00:00:00+00:00
              --until=2018-07-20T00:00:00+00:00 --no-merges --format=%ae | grep
              fujitsu.com | wc -l
            </code>
          </small>
        </pre>
      </div>
    </div>
  </>
);
