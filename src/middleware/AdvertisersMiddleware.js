  import {
    query
  } from "conf/sql";

  export async function fetchAdvertisers() {
    try {
      const queryString = `SELECT * FROM operations.dbo.advertiserdim`;
      const {
        result: {
          recordset = null
        } = {}
      } = await query(queryString);
      return recordset;
    } catch (err) {
      throw new Error(err);
    }
  }

  export async function createAdvertiser(delta) {
    try {
      const deltaKeys = `(${Object.keys(delta).join(",")})`;
      const deltaValues = `('${Object.values(delta).join("' , '")}')`;
      const queryString = `INSERT INTO operations.dbo.upload_advertiserdim ${deltaKeys} values ${deltaValues}`;
      const {
        result: {
          recordsets = null
        } = {}
      } = await query(queryString);
      return recordsets;
    } catch (err) {
      throw new Error(err);
    }
  }

  export async function updateAdvertiser(delta) {
    try {
      const deltaKeys = `(${Object.keys(delta).join(",")})`;
      const deltaValues = `('${Object.values(delta).join("' , '")}')`;
      const queryString = `INSERT INTO operations.dbo.update_advertiserdim ${deltaKeys} values ${deltaValues}`;
      console.log({
        queryString
      });
      const {
        result: {
          recordsets = null
        } = {}
      } = await query(queryString);
      return recordsets;
    } catch (err) {
      throw new Error(err);
    }
  }
