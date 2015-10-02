package com.misys.crowdfunding.provider.api;

import java.util.List;

/**
 * Created by kdeveloper on 10/1/15.
 */
public interface IMahoutProvider {
    void learn();
    void learnBoolean();
    List<String> recommend(String userId);
}
