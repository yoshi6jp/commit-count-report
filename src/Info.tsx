import React from 'react';
export const Info = () => (
  <>
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
