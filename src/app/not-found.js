"use client";
import React from "react";

function Notfound() {
  return (
    <div>
      <section class="page-header error">
        <div class="container">
          <div class="page-header-info text-center mt-40">
            <h4>Oops! Where are we?</h4>
            <h2>
              404 Page <span>Not Found!</span>
            </h2>
            <p>
              Page not Found! The page you are looking for was moved, <br />
              removed, renamed or might never existed.
            </p>
            <a href="index.html" class="default-btn mt-30">
              Back To Homepage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Notfound;
