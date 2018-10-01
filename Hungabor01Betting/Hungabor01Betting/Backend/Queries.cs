using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hungabor01Betting
{
  public class Queries
  {
    public static readonly string InsertAuthor = "insert into Authors values({%s})";
    public static readonly string SelectAuthors = "select distinct name from Authors";
  }
}
